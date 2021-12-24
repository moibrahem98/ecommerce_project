import React, { useEffect } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySubCategory } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

function SubCategoryPage({ match, history }) {
  const dispatch = useDispatch();

  const subcategoryProducts = useSelector((state) => state.subcategoryProducts);
  const { loading, error, product } = subcategoryProducts;

  useEffect(() => {
    dispatch(getProductBySubCategory(match.params.id));
  }, [dispatch, match]);
  console.log(product, "llllllllllll");
  if (!product) return null;

  return (
    <div>
      <h1 style={{ fontFamily: "monospace" }}>
        {product[0].subcategory1.name}-{product[0].category1.name}
      </h1>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
          <Row>
            {product.map((product) => (
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

export default SubCategoryPage;
