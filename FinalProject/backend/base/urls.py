from django.urls import path

from .views import *

urlpatterns = [
    path('api/products/', getProducts, name = 'products'),
    path('api/product/<int:pk>', getProduct, name = 'product')
]