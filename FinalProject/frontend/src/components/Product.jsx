import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={`${product.rating} `}
              text={` ${product.reviews_number} reviews`}
              color={"#e36f10"}
            />
          </div>
        </Card.Text>
        <Card.Text as="h5">{product.price} L.E</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
