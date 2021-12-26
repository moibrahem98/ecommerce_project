from django.db import models
from django.contrib.auth.models import User



def saveCatImg(instance, filename):
    return f"category/{instance.name}/{filename}"


def saveProductImg(instance, filename):
    return f"product/{instance.name}/{filename}"


def saveSubCatImg(instance, filename):
    return f"category/{instance.category}/{instance.name}/{filename}"


def saveBrandImg(instance, filename):
    return f"brand/{instance.name}/{filename}"


def savOfferImg(instance, filename):
    return f"offer/{instance.name}/{filename}"    



class Product(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to=saveProductImg)
    brand = models.ForeignKey('Brand', on_delete=models.CASCADE, null=True, blank=True, default=None)
    category = models.ForeignKey("Category", on_delete=models.SET_NULL, null=True)
    sub_category = models.ForeignKey("SubCategory", on_delete=models.SET_NULL, null=True)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    reviews_number = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    discount = models.DecimalField(max_digits=3, decimal_places=0, null=True, blank=True, default=0)  
    stock = models.IntegerField(null=True, blank=True, default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    img = models.ImageField(upload_to=saveCatImg)

    def __str__(self):
        return str(self.name)


class SubCategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, )
    img = models.ImageField(upload_to=saveSubCatImg)

    def __str__(self):
        return str(self.name)


class Review(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    product = models.ForeignKey(Product, related_name='review',on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.rating)


class Brand(models.Model):
    name = models.CharField(max_length=20, unique=True)
    img = models.ImageField(upload_to=saveBrandImg)

    def __str__(self):
        return str(self.name)

class Banner(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    img = models.ImageField(upload_to=savOfferImg)

class Returns(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=20)
    order_num = models.IntegerField()
    product_name = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=20)
    issue = models.CharField(max_length=500, )
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    issue_status = models.BooleanField(default=False)

    def __str__(self):
        return str(self.title)


