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
import twenty from "../images/25.jpg";
import fifty from "../images/50.jpg";
import seventy from "../images/70.jpg";

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
    centerMode: true,

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
          <a href={`/offersproducts/${offer.id}`}>
            <Card.Img className="offer_img" src={offer.img} lazy />
          </a>
        </div>
      ))}
    </Slider>
  );
}

export default OffersCarousel;
