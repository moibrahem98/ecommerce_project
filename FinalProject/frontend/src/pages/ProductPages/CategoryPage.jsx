import React, { useEffect } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Product from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByCategory,
  listSubCategories,
} from "../../redux/actions/productActions";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
// import InternalSearch from "../components/categorySelect";

function CategoryPage({ match, history }) {
  const dispatch = useDispatch();

  const categoryProducts = useSelector((state) => state.categoryProducts);
  const { loading, error, products } = categoryProducts;
  const subcategoriesList = useSelector((state) => state.subcategoriesList);
  const { subcategories } = subcategoriesList;

  let name = history.location.search;
  useEffect(() => {
    dispatch(listSubCategories());
    dispatch(getProductByCategory(match.params.id, name));
  }, [dispatch, match, name]);

  if (!products) return null;
  if (!subcategories) return null;

  return (
    <div className="py-5">
      <h2 className="h1 heading_1">{products[0].category1.name}</h2>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
          <Row md={8}>
            {subcategories.map((subcategory) => (
              <p key={subcategory.id} style={{ textAlign: "center" }}>
                {subcategory.category == match.params.id && (
                  <Row sm={12} md={6} lg={4} xl={3}>
                    <Col className="btn m-4 ">
                      <a
                        className="nav-link btn_color"
                        href={`/subcategoryproducts/${subcategory.id}`}
                      >
                        {subcategory.name}
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
