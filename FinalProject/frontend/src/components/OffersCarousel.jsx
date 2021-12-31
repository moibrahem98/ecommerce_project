import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { listOffers } from "../redux/actions/productActions";
import Slider from "react-slick";
import Product from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OffersCarousel() {
  const dispatch = useDispatch();
  const offersList = useSelector((state) => state.offersList);
  const { error, loading, offers } = offersList;

  useEffect(() => {
    dispatch(listOffers());
  }, [dispatch]);
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (!offers) return null;
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Slider {...settings} style={{ textAlign: "center" }}>
      {offers.slice(1).map((offer) => (
        <div key={offer.id} style={{ textAlign: "center" }}>
          <a style={{ color: "black" }} href={`/offersproducts/${offer.id}`}>
            {" "}
            <Card
              style={{ padding: "15px", color: "black" }}
              className="pt-2 rounded text-center product_card  btn-outline-primary"
            >
              Discount {offer.value * 100}%
            </Card>
          </a>
        </div>
      ))}
    </Slider>
  );
}

export default OffersCarousel;
