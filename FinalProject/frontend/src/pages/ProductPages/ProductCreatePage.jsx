import React, { useState, useEffect } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, listOffers } from "../../actions/productActions";
import axios from "axios";

function ProductCreatePage({ history }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [offer, setOffer] = useState(0);
  const [brand, setBrand] = useState(0);
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState(0);
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState("");
  const [cat, setCat] = React.useState("");
  const [subcat, setsubCat] = React.useState("");
  const [getbrand, setGetBrand] = React.useState("");

  const productCreate = useSelector((state) => state.productCreate);
  const { success: successCreate } = productCreate;

  const offersList = useSelector((state) => state.offersList);
  const { offers } = offersList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOffers());
      const getData = async () => {
        await axios
          .get("/product/api/categories/")
          .then((res) => {
            setCat(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getData();
      const getSubCat = async () => {
        await axios
          .get(`/product/api/sub_categories/`)
          .then((res) => {
            setsubCat(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getSubCat();
      const getBrand = async () => {
        await axios
          .get(`/product/api/brands/`)
          .then((res) => {
            setGetBrand(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getBrand();

      if (successCreate) {
        dispatch({ type: "PRODUCT_CREATE_RESET" });
        history.push(`/admin/productimage/`);
      }
    } else {
      history.push("/login");
    }
  }, [dispatch, successCreate, history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProduct(
        name,
        price,
        brand,
        offer,
        category,
        subCategory,
        stock,
        description
      )
    );
  };
  if (!cat) return null;
  if (!subcat) return null;
  if (!getbrand) return null;
  if (!userInfo) return null;
  if (!offers) return null;

  return (
    <Container>
      <h1 style={{ textAlign: "center" }} className="h1">
        Add New Product
      </h1>
      <hr />
      <Row className="mt-5">
        <Col lg={5} md={6} sm={12} className="p-3 m-auto shadow rounded-lg">
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br></br>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                min="0"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br></br>
            <Form.Group controlId="offer">
              <Form.Label>Offer Type</Form.Label>
              <select
                className="form-control"
                onChange={(e) => setOffer(e.target.value)}
              >
                <option>----</option>

                {offers.map((offer) => (
                  <option value={parseInt(offer.id)}>{offer.name}</option>
                ))}
              </select>
            </Form.Group>

            <br></br>
            <Form.Group controlId="brand">
              <Form.Label>Brand</Form.Label>
              <select
                className="form-control"
                onChange={(e) => setBrand(e.target.value)}
              >
                <option>----</option>

                {getbrand.map((brand) => (
                  <option value={parseInt(brand.id)}>{brand.name}</option>
                ))}
              </select>
            </Form.Group>
            <br></br>
            <Form.Group controlId="stock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                min="0"
                placeholder="Enter stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br></br>

            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>

              <select
                className="form-control"
                onChange={(e) => setCategory(e.target.value)}
                id="category_input"
              >
                <option>-----</option>

                {cat.map((category) => (
                  <option value={category.id}>{category.name}</option>
                ))}
              </select>
            </Form.Group>
            <br></br>
            <Form.Group controlId="subCategory">
              <Form.Label>Sub Category</Form.Label>

              <select
                className="form-control"
                onChange={(e) => setSubCategory(e.target.value)}
              >
                <option>None</option>
                {subcat.map((subcategory) => (
                  <optgroup label={subcategory.category1.name}>
                    <option value={subcategory.id}>{subcategory.name}</option>
                  </optgroup>
                ))}
              </select>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br></br>
            <div style={{ textAlign: "right" }}>
              {" "}
              <Button type="submit" variant="primary" className="btn_color">
                Next
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductCreatePage;
