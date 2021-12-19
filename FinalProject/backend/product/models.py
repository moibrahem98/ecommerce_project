from django.db import models
from django.contrib.auth.models import User


CATEGORY = (
    ('Perfume','Perfume'),
    ('Makeup','Makeup'),
    ('Body Care','Body Care'),
    ('Hair Care','Hair Care'),
    

)


SUBCATEGORY = (
    # 1.perfume
    ('Men','Men'),
    ('Women','Women'),
    ('Oriental','Oriental'),
    # 2.Makeup
    ('Foundation','Foundation'),
    ('Mascara','Mascara'),
    ('Eye Shadow','Eye Shadow'),
    ('Highlighter','Highlighter'),
    ('Bronzer','Bronzer'),
    ('Lip Gloss','Lip Gloss'),
    ('Rouge','Rouge'),
    ('Makeup Remover','Makeup Remover'),
    ('Kohl','Kohl'),
    # 3.Body Care
    ('Cream','Cream'),
    ('Body Lotion','Body Lotion'),
    ('Body Mist','Body Mist'),
    # 4.Hair Care
    ('Shampo','Shampo'),
    ('Serums','Serums'),
    ('Conditioner','Conditioner'),
    ('Conditioner Cream','Conditioner Cream'),
    ('Protein And Creatine','Protein And Creatine'),
    ('Oils','Oils'),


)

# class Category(models.Model):
#     name = models.CharField(max_length=100, unique=True)

#     def __str__(self):
#         return str(self.name)

# class Sub_Category(models.Model):
#     name = models.CharField(max_length=100, unique=True)
#     category = models.ForeignKey(Category, on_delete=models.CASCADE)

#     def __str__(self):
#         return str(self.name)

class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True,
                            default='/placeholder.png')
    brand = models.CharField(max_length=200, null=True, blank=True)
    # category = models.CharField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY, null= True)
    sub_category = models.CharField(max_length=50, choices=SUBCATEGORY, null= True)

    # category = models.ForeignKey(Category, on_delete=models.CASCADE )
    # sub_category = models.ForeignKey(Sub_Category, on_delete=models.CASCADE)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    reviews_number = models.IntegerField(null=True, blank=True, default=0) 
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    stock = models.IntegerField(null=True, blank=True, default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)




class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)

