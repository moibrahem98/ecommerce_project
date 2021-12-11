import { React } from "react";
import { Card } from "react-bootstrap";

export const Product = (product) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src="{product.image}"></Card.Img>
        <Card.Body></Card.Body>
      </a>
    </Card>
  );
};
