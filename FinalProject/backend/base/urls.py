from django.urls import path
from rest_framework import routers

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

from .views import *
# router = routers.DefaultRouter()
# router.register(r'api/products', getProducts, 'product')  # api urls

urlpatterns = [
    # **************** user urls **********************
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

    # **************** product urls **********************
    path('api/products/', getProducts.as_view({'get': 'list'}), name='products'),
    path('api/products/<int:pk>/reviews/', createProductReview, name='review'),
    path('api/product/<int:pk>', getProduct, name='product'),
    path('api/products/create/', createProduct, name='createProduct'),
    path('api/products/update/<int:pk>/', updateProduct, name='updateproduct'),
    path('api/product/delete/<str:pk>/', deleteProduct, name="product-delete"),
    path('api/products/upload/', uploadImage, name='image-upload'),
    path('api/products/top/', getTopProducts, name='top-products'),


    # **************** orders urls **********************
    path('api/orders/add/', addOrderItems, name='orders-add'),
    path('api/orders/myorders/', getMyOrders, name='myorders'),
    path('api/orders/<str:pk>/', getOredeById, name='user-order'),
    path('api/orders/<str:pk>/pay/', updateOrderPay, name='pay-order'),
    path('api/orders/', getOrders, name='getOrders'),
    path('api/orders/<str:pk>/deliver/',
         updateOrderToDelivered, name='order-delivered'),


]
