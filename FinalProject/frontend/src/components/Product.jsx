import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded text-center">
      <a className="nav-link" href={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </a>
      <Card.Body>
        <a className="nav-link" href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="h6">
          <em style={{ fontFamily: "fantasy" }}>{product.price} L.E</em>
        </Card.Text>
        <Card.Text as="div">
          <div className="my-3">
            <Rating value={`${product.rating} `} color={"#e36f10"} />
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
