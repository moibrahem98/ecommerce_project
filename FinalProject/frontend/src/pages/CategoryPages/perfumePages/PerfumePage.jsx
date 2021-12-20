import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Button, CardGroup } from "react-bootstrap";
import Product from "../../../components/Product";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import { listPerfume } from "../../../actions/categoryActions";

function PerfumePage() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  console.log(products);

  useEffect(() => {
    dispatch(listPerfume());
  }, [dispatch]);
  return (
    <div>
      <CardGroup>
        <Card
          className="rounded ml-5 "
          md={3}
          style={{ width: "18rem", borders: "1px solid black" }}
        >
          <Card.Body>
            <Card.Title as="h1">Men</Card.Title>
            <Card.Text>this is description of this sub category</Card.Text>
            <Button variant="outline-primary" href="/menperfume">
              Discover !!{" "}
            </Button>
          </Card.Body>
        </Card>
        <Card
          className="rounded ml-5 "
          md={3}
          style={{ width: "18rem", borders: "1px solid black" }}
        >
          <Card.Body>
            <Card.Title as="h1">Women</Card.Title>
            <Card.Text>this is description of this sub category</Card.Text>
            <Button variant="outline-primary" href="/womernperfume">
              Discover !!{" "}
            </Button>
          </Card.Body>
        </Card>
        <Card
          className="rounded ml-5 "
          md={3}
          style={{ width: "18rem", borders: "1px solid black" }}
        >
          <Card.Body>
            <Card.Title as="h1">Oriental</Card.Title>
            <Card.Text>this is description of this sub category</Card.Text>
            <Button variant="outline-primary" href="/orientalperfume">
              Discover !!{" "}
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
      <hr></hr>
      <h3
        style={{
          textAlign: "center",
          fontFamily: "monospace",
          fontWeight: "bold",
        }}
      >
        All Perfumes
      </h3>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default PerfumePage;
