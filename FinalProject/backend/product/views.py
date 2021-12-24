from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from .models import *
from .serializers import *
from .filters import ProductFilter
from rest_framework import status
from rest_framework import viewsets
from order.models import Order


# @api_view(['GET'])
# def getProducts(request):
#     query = request.query_params.get('keyword')

#     if query == None:
#         query = ''
#     products = Product.objects.filter(name__icontains = query)
#     serializer = ProductSerializer(products, many=True)

#     filter_fields = (
#         'category',
#     )

#     return Response(serializer.data)

@api_view(['GET'])
def product_list(request):
    queryset = Product.objects.all()
    filterset = ProductFilter(request.GET, queryset=queryset)
    if filterset.is_valid():
        queryset = filterset.qs
    serializer = ProductSerializer(queryset, many=True)
    return Response(serializer.data)


"""class getProducts(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    filter_fields = (
        'category',
    )
    search_fields = (
        '^name',
    )"""


class getCategories(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


"""@api_view(['GET'])
def getsubcategory(request, pk):
    subcategory = SubCategory.objects.filter(category_id=pk)
    serializer = SubCategorySerializer(subcategory, many=True)
    return Response(serializer.data)"""


class getSubCategories(viewsets.ModelViewSet):
    serializer_class = SubCategorySerializer
    queryset = SubCategory.objects.all()


@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


# getTopProducts
@api_view(['GET'])
def getTopProducts(request):
    products = Product.objects.filter(rating__gte=4).order_by('-rating')[0:10]
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):
    user = request.user
    category = Category.objects.get(id=1)
    subCategory = SubCategory.objects.get(id=1)

    product = Product.objects.create(
        user=user,
        name="sample name",
        price=0,
        brand='Sample brand',
        stock=0,
        category=category,
        sub_category=subCategory,
        description=''

    )
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateProduct(request, pk):
    data = request.data
    product = Product.objects.get(_id=pk)
    category = Category.objects.get(id=data['category'])
    subCategory = SubCategory.objects.get(id=data['subCategory'])
    print(category, "----------------------------")
    print(data['subCategory'], "+++++++++++++++++++++++++++")
    print(data, "dsfs5444444444444444444444444444444444444444444444444444")
    product.name = data['name']
    product.price = data['price']
    product.brand = data['brand']
    product.stock = data['stock']
    product.category = category
    product.sub_category = subCategory
    product.description = data['description']

    product.save()

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getProductByCategory(request, pk):
    product = Product.objects.filter(category_id=pk)
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProductBySubCategory(request, pk):
    product = Product.objects.filter(sub_category_id=pk)
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request, pk):
    product = Product.objects.get(_id=pk)
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
def createProductReview(request, pk):
    user = request.user
    product = Product.objects.get(_id=pk)
    data = request.data

    # Review already exists
    alreadyExists = product.review_set.filter(user=user).exists()

    if alreadyExists:
        content = {'detail': 'Product already reviewed'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # No Rating or 0
    elif data['rating'] == 0:
        content = {'detail': 'Please select a rating'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # Create Review
    else:
        review = Review.objects.create(
            user=user,
            product=product,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )
        reviews = product.review_set.all()
        product.reviews_number = len(reviews)

        total = 0
        for i in reviews:
            total += i.rating
        product.rating = total / len(reviews)
        product.save()

        return Response('Review Added')


# ****************************** returns *************************
@api_view(['GET'])
# @permission_classes([IsAdminUser])
def list_returns(request):
    returns = Returns.objects.order_by('-created_at')
    serializer = ReturnsSerializer(returns, many=True)
    return Response(serializer.data)


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def createreturns(request):
    data = request.data
    user = request.user
    returns = Returns.objects.create(
        user=user,
        title=data['title'],
        order_num=data['ordernumber'],
        product_name=data['productname'],
        issue=data['issue'],
        issue_status=False,
    )
    returns.save()
    # order_exist = Order.objects.get(_id=data['ordernumber'])
    # if (order_exist):
    #     returns = Returns.objects.create(
    #         user=user,
    #         title=data['title'],
    #         order_num=data['ordernumber'],
    #         product_name=data['productname'],
    #         issue=data['issue'],
    #     )
    #     serializer = ReturnsSerializer(returns, many=False)
    #     return Response(serializer.data)

    # else:
    #     content = {'detail': 'order number in not valid'}
    #     return Response(content, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updatereturns(request, pk):
    returns = Returns.objects.get(id=pk)
    returns.issue_status = True
    returns.save()
    return Response('issue status updated')
    # if returns:
    #     returns.issue_status = True
    #     serializer = ReturnsSerializer(returns, many=False)
    #     return Response(serializer.data)
    # else:
    #     content = {'detail': 'returns error'}
    #     return Response(content, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getReturnById(request, pk):
    user = request.user
    print(user, "0000000000000000000")
    try:

        returns = Returns.objects.get(id=pk)
        # serializer = ReturnsSerializer(returns, many=False)
        # return Response(serializer.data)
        if user.is_staff or returns.user == user:
            serializer = ReturnsSerializer(returns, many=False)
            return Response(serializer.data)
        else:
            Response({'datails': 'you are not authorized to view this return'},
                     status=status.HTTP_400_BAD_REQUEST)
    except:
        return Response({'datails': 'return dose not exist'}, status=status.HTTP_400_BAD_REQUEST)
