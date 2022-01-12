import React from "react";
import { Container, Image } from "react-bootstrap";

import ProductCarousel from "../../components/ProductCarousel";
import LatestProductsCarousel from "../../components/LatestProductsCarousel";
import CatSlider from "../../components/CatSlider";
import CarouselSlider from "../../components/CarouselSlider";
import before from "../../images/before.jpg";

function HomePage({ history }) {
  return (
    <>
      <CarouselSlider />

      <Container className="text-center" style={{ marginTop: " 20px" }}>
        <h3 className="heading_1 mt-3">الأقسام</h3>
        <CatSlider />
        <hr />
        <h3 className="heading_1">أعلى التقييمات</h3>
        <ProductCarousel />
        <br /> <hr />
        <h3 className="heading_1 mt-5">أحدث الأضافات</h3>
        <LatestProductsCarousel />
      </Container>
      <Image src={before} className="banner" />
    </>
  );
}

export default HomePage;
