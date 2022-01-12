import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import {
  listProductDetails,
  updateProduct,
} from "../../redux/actions/productActions";

function ProductEditPage({ match, history }) {
  const productId = match.params.id;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const [image, setImage] = useState("");
  const [brand, setBrand] = useState(0);
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState(0);
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [cat, setCat] = React.useState("");
  const [subcat, setsubCat] = React.useState("");
  const [getbrand, setGetBrand] = React.useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("/product/api/categories/")
        .then((res) => {
          setCat(res.data);
        })
        .catch((err) => {});
    };
    getData();
    const getSubCat = async () => {
      await axios
        .get(`/product/api/sub_categories/`)
        .then((res) => {
          setsubCat(res.data);
        })
        .catch((err) => {});
    };
    getSubCat();
    const getBrand = async () => {
      await axios
        .get(`/product/api/brands/`)
        .then((res) => {
          setGetBrand(res.data);
        })
        .catch((err) => {});
    };
    getBrand();

    if (successUpdate) {
      dispatch({ type: "PRODUCT_UPDATE_RESET" });
      history.push("/admin/productlist");
    } else {
      if (!product.name || product._id !== Number(productId)) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setSubCategory(product.subCategory);
        setStock(product.stock);
        setDescription(product.description);
      }
    }
  }, [dispatch, product, productId, history, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        subCategory,
        stock,
        description,
      })
    );
  };

  const uploadFileHandler = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();

    formData.append("image", file);
    formData.append("product_id", productId);

    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "/product/api/products/upload/",
        formData,
        config
      );

      setImage(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };

  if (!cat) return null;
  if (!subcat) return null;
  if (!getbrand) return null;

  return (
    <>
      <Link to="/admin/productlist">لرجوع للخلف</Link>

      <Container>
        <h2 style={{ textAlign: "center" }} className="h1">
          تعديل المنتج
        </h2>
        <hr /> {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row className="mt-5">
            <Col lg={5} md={6} sm={12} className="p-3 m-auto shadow rounded-lg">
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                  <Form.Label>الاسم</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="اضافه اسم"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group controlId="price">
                  <Form.Label>السعر</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="اضافه السعر"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <br></br>

                <Form.Group controlId="image">
                  <Form.Label>صوره</Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    placeholder="اضافه صوره"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                  ></Form.Control>
                  <br></br>
                  <Form.File
                    id="image-file"
                    custom
                    label="Choose Image"
                    onChange={uploadFileHandler}
                  ></Form.File>
                  {uploading && <Loader />}
                </Form.Group>
                <br></br>
                <Form.Group controlId="brand">
                  <Form.Label>براند</Form.Label>
                  <select
                    className="form-control"
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    {getbrand.map((brand) => (
                      <option value={parseInt(brand.id)}>{brand.name}</option>
                    ))}
                  </select>
                </Form.Group>
                <br></br>
                <Form.Group controlId="stock">
                  <Form.Label>المخزن</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="اضافه حاله المنتج فى المخزن"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <br></br>

                <Form.Group controlId="category">
                  <Form.Label>القسم</Form.Label>

                  <select
                    className="form-control"
                    onChange={(e) => setCategory(e.target.value)}
                    id="category_input"
                  >
                    {cat.map((category) => (
                      <option value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </Form.Group>
                <br></br>
                <Form.Group controlId="subCategory">
                  <Form.Label>القسم الفرعى</Form.Label>

                  <select
                    className="form-control"
                    onChange={(e) => setSubCategory(e.target.value)}
                  >
                    <option>-----</option>
                    {subcat.map((subcategory) => (
                      <optgroup label={subcategory.category1.name}>
                        <option value={subcategory.id}>
                          {subcategory.name}
                        </option>
                      </optgroup>
                    ))}
                  </select>
                </Form.Group>

                <Form.Group controlId="description">
                  <Form.Label>الوصف</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="اضافه وصف"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <br></br>
                <div style={{ textAlign: "right" }}>
                  <Button type="submit" variant="primary" className="btn_color">
                    تحديث المنتج
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}
export default ProductEditPage;
