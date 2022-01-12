import random

from django.core.mail import send_mail
from django.http.response import HttpResponse
from django.shortcuts import render, redirect
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework import status
from datetime import datetime
import requests
import random


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addOrderItems(request):
    user = request.user
    data = request.data
    orderItems = data['orderItems']
    if orderItems and len(orderItems) == 0:
        return Response({'detail': 'No Order Items'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        order = Order.objects.create(
            user=user,
            payment_method=data['paymentMethod'],
            tax=0,
            shipping_price=data['shippingPrice'],
            total_price=data['totalPrice']
        )

        shipping = ShippingAddress.objects.create(
            order=order,
            address=data['shippingAddress']['address'],
            city=data['shippingAddress']['city'],
            telephone_number=data['shippingAddress']['telephoneNumber'],
            country=data['shippingAddress']['country'],
        )

        for i in orderItems:
            product = Product.objects.get(_id=i['product'])

            item = OrderItem.objects.create(
                product=product,
                order=order,
                name=product.name,
                quantity=i['qty'],
                price=i['price'],
                image=product.image.url,
            )

            product.stock -= item.quantity
            product.save()

       
        serializer = OrderSerializer(order, many=False)
        return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyOrders(request):
    user = request.user
    orders = user.order.all()
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOredeById(request, id):
    user = request.user
    try:
        order = Order.objects.get(_id=id)
        if user.is_staff or order.user == user:
            serializer = OrderSerializer(order, many=False)
            return Response(serializer.data)
        else:
            Response({'datails': 'you are not authorized to view this order'},
                    status=status.HTTP_400_BAD_REQUEST)
    except:
        return Response({'datails': 'order dose not exist'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getOrders(request):
    orders = Order.objects.order_by("-created_at")
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateOrderPay(request, id):
    order = Order.objects.get(_id=id)
    order.is_paid = True
    order.paid_at = datetime.now()
    order.save()
    return Response('order is paid')


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateOrderToDelivered(request, id):
    order = Order.objects.get(_id=id)
    order.is_delivered = True
    order.delivered_at = datetime.now()
    order.save()

    return Response('Order was Delivered')

