import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getProductByCategory,
  listSubCategories,
} from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

function CategoryPage({ match, history }) {
  const dispatch = useDispatch();

  const categoryProducts = useSelector((state) => state.categoryProducts);
  const { loading, error, products } = categoryProducts;
  const subcategoriesList = useSelector((state) => state.subcategoriesList);
  const {
    loading: subcategoriesLoading,
    error: subcategoriesError,
    subcategories,
  } = subcategoriesList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listSubCategories());
    dispatch(getProductByCategory(match.params.id));
  }, [dispatch, match]);
  if (!products) return null;
  if (!subcategories) return null;

  return (
    <div>
      <h1>{products[0].category1.name}</h1>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
          <Row>
            {subcategories.map((subcategory) => (
              <p>
                {subcategory.category == match.params.id && (
                  <Row sm={12} md={6} lg={4} xl={3}>
                    <Col className="m-2" style={{ width: "250px" }}>
                      <Card className="my-3 p-3 rounded text-center">
                        <Card.Body>
                          <a
                            className="nav-link"
                            href={`/subcategoryproducts/${subcategory.id}`}
                          >
                            <Card.Title as="div">
                              <strong>{subcategory.name}</strong>
                            </Card.Title>
                          </a>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                )}
              </p>
            ))}
          </Row>

          <h2>All Products</h2>

          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default CategoryPage;
