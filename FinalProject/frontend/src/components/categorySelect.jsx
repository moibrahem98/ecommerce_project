import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { listProductDetails, updateProduct } from "../actions/productActions";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";
const baseURL = "/product/api/categories/";

export default function Cat() {
  const [cat, setCat] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCat(response.data);
    });
  }, []);

  console.log(cat);
  if (!cat) return null;

  return (
    <div>
      <h1>categories</h1>
      <Form.Control as="select">
        {cat.map((category) => (
          <option>{category.name}</option>
        ))}
      </Form.Control>
      <div></div>
    </div>
  );
}
