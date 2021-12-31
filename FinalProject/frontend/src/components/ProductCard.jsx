import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

function ProductCard({ product }) {
  return (
    <Card className="pt-2 rounded text-center product_card">
      <a className="nav-link" href={`/product/${product._id}`}>
        <Card.Img src={product.image} className="product_img" lazy />
      </a>

      <Card.Body>
        <a className="nav-link ellipsis" href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong style={{ color: "black" }}>{product.name}</strong>
          </Card.Title>
        </a>
        <hr></hr>
        <Card.Text as="h6">
          <p style={{ fontFamily: "cairo" }}>{product.price} L.E</p>

          {/*handel price */}

          {/*<em style={{ fontFamily: "fantasy" }}> &nbsp;{product.price * product.offer.value} &nbsp;L.E</em>*/}
        </Card.Text>
        {/* <Card.Text as="div">
          <div>
            <Rating value={`${product.rating} `} color={"#e36f10"} />
          </div>
        </Card.Text> */}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
