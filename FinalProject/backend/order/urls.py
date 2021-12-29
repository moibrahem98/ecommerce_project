from django.urls import path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [

    path('api/orders/add/', addOrderItems, name='orders-add'),
    path('api/payment/<str:pk>/', payment, name='payment'),
    path('api/callback/', callback, name='callback'),
    path('api/orders/myorders/', getMyOrders, name='myorders'),
    path('api/orders/<str:id>/', getOredeById, name='user-order'),
    path('api/orders/<str:id>/pay/', updateOrderPay, name='pay-order'),
    path('api/orders/', getOrders, name='getOrders'),
    path('api/orders/<str:id>/deliver/',
        updateOrderToDelivered, name='order-delivered'),
    path('api/coupons/', listcoupons, name="coupons"),
    path('api/coupons/<str:name>/', getCouponByName, name="couponsByName"),
    path('api/coupons/create/', createcoupons, name="create_coupons"),

]
