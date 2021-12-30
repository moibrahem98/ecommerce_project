from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from user.serializers import UserSerializer

from .models import *


class ProductSerializer(serializers.ModelSerializer):
    reviews = serializers.SerializerMethodField(read_only=True)
    category1 = serializers.SerializerMethodField(read_only=True)
    subcategory1 = serializers.SerializerMethodField(read_only=True)
    brand1 = serializers.SerializerMethodField(read_only=True)

    offer = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Product
        fields = '__all__'

    def get_reviews(self, obj):
        reviews = obj.review.all()
        serializer = ReviewSerializer(reviews, many=True)
        return serializer.data

    def get_category1(self, obj):
        category1 = Category.objects.get(name=obj.category)
        serializer = CategorySerializer(category1, many=False)
        return serializer.data

    def get_subcategory1(self, obj):
        category1 = SubCategory.objects.get(name=obj.sub_category)
        serializer = SubCategorySerializer(category1, many=False)
        return serializer.data

    def get_brand1(self, obj):
        brand1 = Brand.objects.get(name=obj.brand)
        serializer = BrandSerializer(brand1, many=False)
        print(obj.offer, "*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-")
        return serializer.data

    def get_offer(self, obj):
        offer = Offer.objects.get(name=obj.offer)
        serializer = OfferSerializer(offer, many=False)
        return serializer.data


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class SubCategorySerializer(serializers.ModelSerializer):
    category1 = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = SubCategory
        fields = '__all__'

    def get_category1(self, obj):
        category1 = Category.objects.get(name=obj.category)
        serializer = CategorySerializer(category1, many=False)
        return serializer.data


class ReturnsSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Returns
        fields = '__all__'

    def get_user(self, obj):
        user = obj.user
        serializer = UserSerializer(user, many=False)
        return serializer.data


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'


class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = '__all__'


class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = '__all__'
