import React, { useEffect } from "react";
import { Row, Col, Container, DropdownButton, Dropdown } from "react-bootstrap";
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
      <h2 className="h1 heading_1 text-right">{products[0].category1.name}</h2>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
          <DropdownButton
            id="dropdown-item-button"
            title=" أختر المنتج"
            variant="secondary"
            menuVariant="dark"
            className="text-center my-5 drop_down"
          >
            {subcategories.map((subcategory) => (
              <p key={subcategory.id} style={{ textAlign: "center" }}>
                {subcategory.category == match.params.id && (
                  <Dropdown.Item
                    href={`/subcategoryproducts/${subcategory.id}`}
                  >
                    {subcategory.name}
                  </Dropdown.Item>
                )}
              </p>
            ))}
          </DropdownButton>

          <h2 className="text-center">كل المنتجات</h2>

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
