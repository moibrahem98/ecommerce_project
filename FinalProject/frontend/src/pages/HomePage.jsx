import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProducts } from "../actions/productActions";
import ProductCarousel from "../components/ProductCarousel";
import CatSlider from "../components/CatSlider";
// import ProductCarousel from "../components/ProductCarousel";
import CarouselSlider from "../components/CarouselSlider";

function HomeScreen({ history }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  let name = history.location.search;

  useEffect(() => {
    dispatch(listProducts(name));
  }, [dispatch, name]);
  return (
    <>
      <CarouselSlider />

      {/* <CarouselPage /> */}
      <Container>
        <div className="mt-5">
          <h3 className="heading_1">Clean Beauty Favorites</h3>
          <CatSlider />

          {!name && <ProductCarousel />}
          <h3 className="heading_1 mt-5">Top Products</h3>
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
      </Container>
    </>
  );
}

export default HomeScreen;
