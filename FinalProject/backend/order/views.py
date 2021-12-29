import random
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
    orders = Order.objects.all()
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


@api_view(['GET'])
@permission_classes([IsAdminUser])
def listcoupons(request):
    coupons = Coupons.objects.all()
    serializer = CouponsSerializer(coupons, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createcoupons(request):
    data = request.data
    user = request.user
    coupons = Coupons.objects.create(
        user=user,
        name=data['name'],
        percentage=data['percentage'],
        start_date=data['startDate'],
        end_date=data['endDate'],
    )
    serializer = CouponsSerializer(coupons, many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getCouponByName(request, name):
    try:
        coupons = Coupons.objects.get(name=name)
        serializer = CouponsSerializer(coupons, many=False)
        return Response(serializer.data)
    except:
        return Response({'datails': 'coupons dose not exist'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def payment(request, pk):
    # user = request.user
   
    order = Order.objects.get(_id=pk)
    print(order, "orororororororro")
    r1 = requests.post('https://accept.paymob.com/api/auth/tokens',
                    json={
                        'api_key': 'ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6VXhNaUo5LmV5SndjbTltYVd4bFgzQnJJam94TkRVd01UTXNJbU5zWVhOeklqb2lUV1Z5WTJoaGJuUWlMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkuMlQzcTdKVGx4MEdSUWR3aFpFUFNLYUJSeGNvMVZpTDBzSEcxbmtVSnlEQWZDUG9pYUFYRFowR1JOakxDN2FKWThUSjVrNGRBaFlXYlhKRWlFbjkzNXc='})
    auth_token = r1.json()['token']

    r2 = requests.post('https://accept.paymob.com/api/ecommerce/orders',
                    json={
                        "auth_token": auth_token,
                        "delivery_needed": "false",
                        "amount_cents": "100",
                        "currency": "EGP",
                        "merchant_order_id": random.random(),
                        "items": [
                            {
                                "name": "ASC1515",
                                "amount_cents": "500000",
                                "description": "Smart Watch",
                                "quantity": "1"
                            },
                            {
                                "name": "ERT6565",
                                "amount_cents": "200000",
                                "description": "Power Bank",
                                "quantity": "1"
                            }
                        ],
                        "shipping_data": {
                            "apartment": "803",
                            "email": "claudette09@exa.com",
                            "floor": "42",
                            "first_name": "Clifford",
                            "street": "Ethan Land",
                            "building": "8028",
                            "phone_number": "+86(8)9135210487",
                            "postal_code": "01898",
                            "extra_description": "8 Ram , 128 Giga",
                            "city": "Jaskolskiburgh",
                            "country": "CR",
                            "last_name": "Nicolas",
                            "state": "Utah"
                        },
                        "shipping_details": {
                            "notes": " test",
                            "number_of_packages": 1,
                            "weight": 1,
                            "weight_unit": "Kilogram",
                            "length": 1,
                            "width": 1,
                            "height": 1,
                            "contents": "product of some sorts"
                        }
                    })
    order_id = r2.json()['id']

    r3 = requests.post('https://accept.paymob.com/api/acceptance/payment_keys',
                    json={
                        "auth_token": auth_token,
                        "amount_cents": "100",
                        "expiration": 3600,
                        "order_id": order_id,
                        "billing_data": {
                            "apartment": "803",
                            "email": "claudette09@exa.com",
                            "floor": "42",
                            "first_name": "Clifford",
                            "street": "Ethan Land",
                            "building": "8028",
                            "phone_number": "+86(8)9135210487",
                            "shipping_method": "idG",
                            "postal_code": "01898",
                            "city": "Jaskolskiburgh",
                            "country": "CR",
                            "last_name": "Nicolas",
                            "state": "Utah"
                        },
                        "currency": "EGP",
                        "integration_id": 1654230
                    })

    payment_token = r3.json()['token']

    return redirect(f'https://accept.paymob.com/api/acceptance/iframes/324147?payment_token={payment_token}')
