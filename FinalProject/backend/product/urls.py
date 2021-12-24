from django.urls import path
from rest_framework import routers

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

from .views import *

# router = routers.DefaultRouter()
# router.register(r'api/products', getProducts, 'product')  # api urls

urlpatterns = [

    path('api/products/', product_list, name='products'),
    path('api/categories/', getCategories.as_view({'get': 'list'}), name='categories'),
    path('api/sub_categories/', getSubCategories.as_view({'get': 'list'}), name='subcategories'),
    # path('api/category/<str:pk>/sub_categories/', getsubcategory, name='subcategories'),
    path('api/products/<int:pk>/reviews/', createProductReview, name='review'),
    path('api/product/<int:pk>', getProduct, name='product'),
    path('api/products/create/', createProduct, name='createProduct'),
    path('api/products/update/<int:pk>/', updateProduct, name='updateproduct'),
    path('api/product/delete/<str:pk>/', deleteProduct, name="product-delete"),
    path('api/products/upload/', uploadImage, name='image-upload'),
    path('api/products/top/', getTopProducts, name='top-products'),
    path('api/products/category/<str:pk>/',getProductByCategory,name="produsts_by_category"),
    # ***************************************
    path('api/returns/', list_returns, name='returns'),
    path('api/returns/<str:pk>/', getReturnById, name='returns-details'),

    path('api/returns/create/', createreturns, name='create_returns'),
    path('api/returns/<str:pk>/update/', updatereturns, name='update_returns')

]
