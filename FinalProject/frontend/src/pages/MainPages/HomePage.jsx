import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Image } from "react-bootstrap";
import Product from "../../components/ProductCard";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { listProducts } from "../../redux/actions/productActions";
import ProductCarousel from "../../components/ProductCarousel";
import LatestProductsCarousel from "../../components/LatestProductsCarousel";
import OffersCarousel from "../../components/OffersCarousel";
import CatSlider from "../../components/CatSlider";
import CarouselSlider from "../../components/CarouselSlider";
import before from "../../images/before.jpg";

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

      <Container className="text-center" style={{ marginTop: " 20px" }}>
        <h3 className="heading_1 mt-5 text-center">Offers</h3>
        {!name && <OffersCarousel />}
        <h3 className="heading_1 mt-3">Shop By Category</h3>
        <CatSlider />
        <hr />
        <h3 className="heading_1">Top Rated Products</h3>
        {!name && <ProductCarousel />}
        <br /> <hr />
        <h3 className="heading_1 mt-5">Latest Products</h3>
        {!name && <LatestProductsCarousel />}
      </Container>
      <Image src={before} className="banner" />
    </>
  );
}

export default HomePage;
