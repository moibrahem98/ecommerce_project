import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

import { listCategories } from "../redux/actions/productActions";

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
      <Row className="position-relative container">
        {categories.map((category) => (
          <Col xs={12} sm={6} lg={3}>
            <div className="cont">
              <a href={`/categoryproducts/${category.id}`}>
                <img
                  className="d-block w-100 carousel_img mb-4"
                  src={category.img}
                  alt="First slide"
                />
                <div className="middle">
                  <div className="text">{category.name}</div>
                </div>
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}
