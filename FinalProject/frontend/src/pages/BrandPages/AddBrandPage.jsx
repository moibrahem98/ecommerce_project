import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { addBrandFunction } from "../../redux/actions/productActions";
import axios from "axios";

function AddBrandPage({ location, history }) {
  const [name, setName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [img, setImg] = useState();

  const dispatch = useDispatch();

  const brandCreate = useSelector((state) => state.brandCreate);
  const { success: successCreate } = brandCreate;

  if (successCreate) {
    dispatch({ type: "BRAND_ADD_RESET" });
    history.push("/admin/brands");
  }

  const uploadFileHandler = async (event) => {
    const file = event.target.files[0];
    console.log(file, "/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*");
    const formData = new FormData();
    formData.append("img", file);
    formData.append("name", name);
    console.log(formData);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "/product/api/createbrand/",
        formData,
        config
      );

      setImg(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addBrandFunction(name));
  };
  return (
    <Container>
      <Row className="mt-5">
        <Col lg={5} md={6} sm={12} className="p-3 m-auto shadow rounded-lg">
          <h3 className=" text-success mt-1 p-1 text-center ">Add Brand</h3>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>أسم البراند</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Brand Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>صوره</Form.Label>
              <Form.Control
                type="text"
                disabled
                placeholder="Enter image"
                value={img}
                onSubmit={(event) => setImg(event.target.value)}
              ></Form.Control>
              <br></br>
              <Form.File
                id="image-file"
                custom
                label="Choose Image"
                onSubmit={uploadFileHandler}
              ></Form.File>
            </Form.Group>
            <Button
              type="submit"
              variant="dark"
              className="w-100 text-success btn_color"
            >
              اضافه براند
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddBrandPage;
