from django.urls import path
from rest_framework import routers

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

from .views import *
# router = routers.DefaultRouter()
# router.register(r'api/products', getProducts, 'product')  # api urls

urlpatterns = [
    path('api/users/login/', MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/users/profile/', getUserProfile, name='user_profile'),
    path('api/users/profile/update/',
         updateUserProfile, name='update_user_profile'),
    path('api/users/all/', getUsers, name='all_users'),
    path('api/users/register/', register, name='register'),
    path('api/users/<str:pk>/', getUserByID, name='user'),
    path('api/users/delete/<str:pk>/', deleteUser, name='update-user'),
    path('api/users/update/<str:pk>/', updateUser, name='delete-user'),


]