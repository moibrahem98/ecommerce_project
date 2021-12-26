import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

import { listCategories } from "../actions/productActions";

export default function CarouselSlider() {
  const dispatch = useDispatch();

  const categoriesList = useSelector((state) => state.categoriesList);
  const { categories } = categoriesList;
  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);
  if (!categories) return null;

  return (
    <>
      <Row>
        {categories.map((category) => (
          <Col xs={12} sm={6} lg={3}>
            <a href={`/categoryproducts/${category.id}`}>
              <img
                className="d-block w-100 carousel_img mb-4"
                src={category.img}
                alt="First slide"
              />
            </a>
          </Col>
        ))}
      </Row>
    </>
  );
}
