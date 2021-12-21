import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded text-center">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="h5">{product.price} L.E</Card.Text>
        <Card.Text as="div">
          <div className="my-3">
            <Rating value={`${product.rating} `} color={"#e36f10"} />
          </div>
        </Card.Text>
        <div className="butn_cart">
          <Button variant="btn-outline-primary">
            <i className="fas fa-cart-plus"></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Product;
