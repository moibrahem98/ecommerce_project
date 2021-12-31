import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../../components/ProductCard";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { listProducts } from "../../redux/actions/productActions";
import ProductCarousel from "../../components/ProductCarousel";
import LatestProductsCarousel from "../../components/LatestProductsCarousel";
import OffersCarousel from "../../components/OffersCarousel";
import CatSlider from "../../components/CatSlider";
import CarouselSlider from "../../components/CarouselSlider";

function HomePage({ history }) {
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

      <Container style={{ marginTop: " 20px" }}>
        <h3 style={{ textAlign: "center" }} className="heading_1">
          Shop By Category
        </h3>
        <CatSlider />
        <hr />
        <h3 style={{ textAlign: "center" }} className="heading_1">
          Top Rated Products
        </h3>
        {!name && <ProductCarousel />}
        <br /> <hr />
        <h3 style={{ textAlign: "center" }} className="heading_1 mt-5">
          Latest Products
        </h3>
        {!name && <LatestProductsCarousel />}
        <br /> <hr />
        <h3
          style={{
            textAlign: "center",
            fontFamily: "Hind Guntur Semi-bold 600",
            fontSize: "2em",
          }}
          className="heading_1 mt-5 "
        >
          <em>Offers</em>
        </h3>
        {!name && <OffersCarousel />}
      </Container>
    </>
  );
}

export default HomePage;
