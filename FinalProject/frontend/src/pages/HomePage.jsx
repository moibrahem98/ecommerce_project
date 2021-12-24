import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Image } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProducts } from "../actions/productActions";
import ProductCarousel from "../components/ProductCarousel";
import CatSlider from "../components/CatSlider";
import CarouselSlider from "../components/CarouselSlider";
import before from "../images/before.jpg";
import banner from "../images/banner.jpg";

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
      <Container fluid>
        <CatSlider />
        <Image src={banner} alt="photo" style={{ maxWidth: "100%" }} />
      </Container>
      <Container>
        <h3 className="heading_1">Top Rated Products</h3>
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
      </Container>
      <Image
        src={before}
        alt="photo"
        style={{ maxWidth: "100%", marginBottom: "-30px" }}
      />
    </>
  );
}

export default HomeScreen;
