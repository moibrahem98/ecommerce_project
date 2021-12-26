import React, { useEffect } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByCategory,
  listSubCategories,
} from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import InternalSearch from "../components/categorySelect";

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

  let name = history.location.search;
  useEffect(() => {
    dispatch(listSubCategories());
    dispatch(getProductByCategory(match.params.id, name));
  }, [dispatch, match, name]);

  console.log(products, "lllllllllllllllllllllllllllllllll");

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
          {/* <InternalSearch /> */}
          <Row md={8}>
            {subcategories.map((subcategory) => (
              <p>
                {subcategory.category == match.params.id && (
                  <Row sm={12} md={6} lg={4} xl={3}>
                    <Col className="" style={{ width: "250px" }}>
                      <a
                        className="nav-link"
                        href={`/subcategoryproducts/${subcategory.id}`}
                      >
                        <Card.Img src={subcategory.img} />
                        <h5
                          style={{
                            textAlign: "center",
                            color: "black",
                            marginTop: "20px",
                          }}
                        >
                          {subcategory.name}
                        </h5>
                      </a>
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
