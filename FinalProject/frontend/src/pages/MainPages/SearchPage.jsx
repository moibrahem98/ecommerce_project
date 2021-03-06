import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../../components/ProductCard";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { listProducts } from "../../redux/actions/productActions";

import SearchBox from "../../components/SearchBox";

function SearchPage({ history }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  let name = history.location.search;

  useEffect(() => {
    dispatch(listProducts(name));
  }, [dispatch, name]);
  return (
    <>
      <Container
        style={{
          marginTop: " 100px",
          textAlign: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <h3 style={{ textAlign: "center" }} className="heading_1">
          بحث
        </h3>
        <div
          style={{
            textAlign: "center",
            alignItems: "center",
            marginBottom: " 5px",
          }}
          className="justify-content-center row"
        >
          <SearchBox />
        </div>
        <hr />
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
      </Container>
    </>
  );
}

export default SearchPage;
