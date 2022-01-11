import React, { useState, useEffect } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import axios from "axios";
import { listProducts } from "../../redux/actions/productActions";
import FormContainer from "../../components/FormContainer";

function ProductImageAddPage({ match, history }) {
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  let myvar = products[products.length - 1];

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const uploadFileHandler = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();

    formData.append("image", file);
    formData.append("product_id", myvar._id);

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
  const submitHandler = () => {
    history.push("/admin/productlist");
  };

  if (!myvar) return null;
  if (!products) return null;
  return (
    <Container>
      {" "}
      <h1 style={{ textAlign: "center" }} className="h1">
        أضافه صوره للمنتج
      </h1>
      <hr />
      <Row className="mt-5">
        {" "}
        <Col lg={5} md={6} sm={12} className="p-3 m-auto shadow rounded-lg">
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="image">
              <Form.Label>صوره</Form.Label>
              <Form.Control
                disabled
                type="text"
                placeholder="Enter image"
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
            <div style={{ textAlign: "right" }}>
              <Button type="submit" variant="primary" className="btn_color">
                أضافه المنتج
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductImageAddPage;
