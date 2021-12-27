import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
function Product({ product }) {
  return (
    <Card className="pt-2 rounded text-center product_card">
      <a className="nav-link" href={`/product/${product._id}`}>
        <Card.Img src={product.image} className="product_img" />
      </a>
      <Card.Body>
        <a className="nav-link ellipsis" href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="h6">
          <em style={{ fontFamily: "fantasy" }}>{product.price} L.E</em>
        </Card.Text>
        <Card.Text as="div">
          <div>
            <Rating value={`${product.rating} `} color={"#e36f10"} />
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
