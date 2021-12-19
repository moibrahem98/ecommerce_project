from django.urls import path
from rest_framework import routers

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

from .views import *
# router = routers.DefaultRouter()
# router.register(r'api/products', getProducts, 'product')  # api urls

urlpatterns = [
   
    path('api/products/', getProducts.as_view({'get': 'list'}), name='products'),
    path('api/products/<int:pk>/reviews/', createProductReview, name='review'),
    path('api/product/<int:pk>', getProduct, name='product'),
    path('api/products/create/', createProduct, name='createProduct'),
    path('api/products/update/<int:pk>/', updateProduct, name='updateproduct'),
    path('api/product/delete/<str:pk>/', deleteProduct, name="product-delete"),
    path('api/products/upload/', uploadImage, name='image-upload'),
    path('api/products/top/', getTopProducts, name='top-products'),




]
