from django.urls import path
from rest_framework import routers

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

from .views import *

urlpatterns = [

    path('api/products/<int:id>/reviews/', createProductReview, name='review'),
    path('api/product/<int:id>', getProduct, name='product'),
    path('api/products/create/', createProduct, name='createProduct'),
    path('api/products/update/<int:id>/', updateProduct, name='updateproduct'),
    path('api/product/delete/<str:id>/', deleteProduct, name="product-delete"),
    path('api/products/upload/', uploadImage, name='image-upload'),
    path('api/products/top/', getTopProducts, name='top-products'),
    path('api/products/category/<str:id>/', getProductByCategory, name="produsts_by_category"),
    path('api/products/subcategory/<str:id>/', getProductBySubCategory, name="produsts_by_subcategory"),
    path('api/products/', product_list, name='products'),
    path('api/products/latest/', latestProduct, name='latest-products'),

    path('api/categories/', getCategories.as_view({'get': 'list'}), name='categories'),
    path('api/sub_categories/', getSubCategories.as_view({'get': 'list'}), name='subcategories'),

    # ****** returns ***************

    path('api/myreturns/', getMyReturns, name='myreturns'),
    path('api/returns/create/', createreturns, name='create_returns'),
    path('api/returns/', list_returns, name='returns'),
    path('api/returns/<str:id>/', getReturnById, name='returns-details'),
    path('api/returns/<str:id>/update/', updatereturns, name='update_returns'),

    # ****** brand ***************

    path('api/brands/', getbrands, name="all_brands"),
    path('api/brand/<str:id>', GetbrandById, name="brand"),
    path('api/brand/<str:id>/products', getProductByBrand, name='products_by_brand'),
    # path('api/brand/upload/', uploadBrandImage, name='brand-image-upload'),
    path('api/brands/create/', createbrand, name="create-brands"),


    path('api/banners/create', createBanner, name="create_banner"),
    path('api/banners/<str:id>', deleteBanner, name="delete_banner"),
    path('api/banners/', getbanners, name="banner"),

]
