from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

from .views import *

urlpatterns = [
    # **************** user urls **********************
    path('api/users/login/', MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/users/profile/', getUserProfile, name='user_profile'),
    path('api/users/profile/update/',
         updateUserProfile, name='update_user_profile'),
    path('api/users/all/', getUsers, name='all_users'),
    path('api/users/register/', register, name='register'),

    # **************** product urls **********************
    path('api/products/', getProducts, name='products'),
    path('api/product/<int:pk>', getProduct, name='product'),

    # **************** orders urls **********************
    path('api/orders/add/', addOrderItems, name='orders-add'),

]
