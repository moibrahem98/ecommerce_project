from django.core import paginator
from django.core.mail import send_mail
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from .models import *
from .serializers import *
from .filters import ProductFilter
from rest_framework import status
from rest_framework import viewsets
from order.models import Order
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.conf import settings


class getCategories(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class getSubCategories(viewsets.ModelViewSet):
    serializer_class = SubCategorySerializer
    queryset = SubCategory.objects.all()




@api_view(['GET'])
def product_list(request):
    queryset = Product.objects.all()
    filterset = ProductFilter(request.GET, queryset=queryset)
    if filterset.is_valid():
        queryset = filterset.qs

    serializer = ProductSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def latestProduct(request):
    queryset = Product.objects.order_by('-created_at')[:8]
    serializer = ProductSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, id):
    product = Product.objects.get(_id=id)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getTopProducts(request):
    products = Product.objects.filter(rating__gte=4).order_by('-rating')[0:10]
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):
    user = request.user
    data = request.data
   
    product = Product.objects.create(
        user=user,
        name=data['name'],
        price=data['price'],
        offer_id=data['offer'],
        brand=Brand.objects.get(id=data['brand']),
        stock=data['stock'],
        category=Category.objects.get(id=data['category']),
        sub_category=SubCategory.objects.get(id=data['subCategory']),
        description=data['description']
    )
    product.save()
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateProduct(request, id):
    data = request.data
    product = Product.objects.get(_id=id)
    offer = Offer.objects.get(id=data['offer'])
    category = Category.objects.get(id=data['category'])
    subCategory = SubCategory.objects.get(id=data['subCategory'])
    brand = Brand.objects.get(id=data['brand'])

    product.name = data['name']
    product.price = data['price']
    product.offer = offer
    product.brand = brand
    product.stock = data['stock']
    product.category = category
    product.sub_category = subCategory
    product.description = data['description']

    product.save()

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getProductByCategory(request, id):
    product = Product.objects.filter(category_id=id)
    filterset = ProductFilter(request.GET, queryset=product)
    if filterset.is_valid():
        product = filterset.qs
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProductBySubCategory(request, id):
    product = Product.objects.filter(sub_category_id=id)
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProductByOffer(request, id):
    product = Product.objects.filter(offer_id=id)
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request, id):
    product = Product.objects.get(_id=id)
    product.delete()
    return Response('Product Deleted')


@api_view(['POST'])
def uploadImage(request):
    data = request.data
    product_id = data['product_id']
    product = Product.objects.get(_id=product_id)
    product.image = request.FILES.get('image')
    product.save()
    return Response('Image Uploaded')


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductReview(request, id):
    user = request.user
    product = Product.objects.get(_id=id)
    data = request.data

    alreadyExists = product.review.filter(user=user).exists()

    if alreadyExists:
        content = {'detail': 'Product already reviewed'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    elif data['rating'] == 0:
        content = {'detail': 'Please select a rating'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    else:
        review = Review.objects.create(
            user=user,
            product=product,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )
        reviews = product.review.all()
        product.reviews_number = len(reviews)

        total = 0
        for i in reviews:
            total += i.rating
        product.rating = total / len(reviews)
        product.save()

        return Response('Review Added')


@api_view(['GET'])
@permission_classes([IsAdminUser])
def list_returns(request):
    returns = Returns.objects.order_by('-created_at')
    serializer = ReturnsSerializer(returns, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createreturns(request):
    data = request.data
    user = request.user
    returns = Returns.objects.create(
        user=user,
        title=data['title'],
        order_num=data['ordernumber'],
        product_name=data['productname'],
        phone_number=data['phonenumber'],
        issue=data['issue'],
        issue_status=False,
    )
    returns.save()

    serializer = ReturnsSerializer(returns, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updatereturns(request, id):
    returns = Returns.objects.get(id=id)
    returns.issue_status = True
    returns.save()
    return Response('issue status updated')


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getReturnById(request, id):
    user = request.user
    try:

        returns = Returns.objects.get(id=id)

        if user.is_staff or returns.user == user:
            serializer = ReturnsSerializer(returns, many=False)
            return Response(serializer.data)
        else:
            Response({'datails': 'you are not authorized to view this return'},
                     status=status.HTTP_400_BAD_REQUEST)
    except:
        return Response({'datails': 'return dose not exist'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyReturns(request):
    user = request.user
    returns = user.returns_set.all()
    serializer = ReturnsSerializer(returns, many=True)
    return Response(serializer.data)



# ************ brand ****************


@api_view(['GET'])
def getbrands(request):
    brand = Brand.objects.all()
    serializer = BrandSerializer(brand, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProductByBrand(request, id):
    product = Product.objects.filter(brand_id=id)
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def GetbrandById(request, id):
    brand = Brand.objects.get(id=id)
    serializer = BrandSerializer(brand, many=False)
    return Response(serializer.data)


