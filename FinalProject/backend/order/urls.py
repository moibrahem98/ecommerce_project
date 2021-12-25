from django.urls import path
from rest_framework import routers

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

from .views import *

# router = routers.DefaultRouter()
# router.register(r'api/products', getProducts, 'product')  # api urls

urlpatterns = [

    path('api/orders/add/', addOrderItems, name='orders-add'),
    path('api/orders/payment/', payment, name='payment'),
    path('api/orders/myorders/', getMyOrders, name='myorders'),
    path('api/orders/<str:pk>/', getOredeById, name='user-order'),
    path('api/orders/<str:pk>/pay/', updateOrderPay, name='pay-order'),
    path('api/orders/', getOrders, name='getOrders'),
    path('api/orders/<str:pk>/deliver/',
         updateOrderToDelivered, name='order-delivered'),
    path('api/coupons/', listcoupons, name="coupons"),
    path('api/coupons/<str:name>/', getCouponByName, name="couponsByName"),
    path('api/coupons/create/', createcoupons, name="create_coupons"),

]
