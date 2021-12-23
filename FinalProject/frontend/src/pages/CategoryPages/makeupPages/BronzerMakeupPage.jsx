import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../../../components/Product";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import { listBronzerMakeup } from "../../../actions/categoryActions";

function BronzerMakeupPage() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  console.log(products);

  useEffect(() => {
    dispatch(listBronzerMakeup());
  }, [dispatch]);
  return (
    <div>
      <h1>BronzerMakeupS</h1>
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

export default BronzerMakeupPage;