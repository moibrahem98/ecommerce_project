from django.urls import path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [

    path('api/orders/add/', addOrderItems, name='orders-add'),
    
    path('api/orders/myorders/', getMyOrders, name='myorders'),
    path('api/orders/<str:id>/', getOredeById, name='user-order'),
    path('api/orders/<str:id>/pay/', updateOrderPay, name='pay-order'),
    path('api/orders/', getOrders, name='getOrders'),
    path('api/orders/<str:id>/deliver/',
         updateOrderToDelivered, name='order-delivered'),

]
