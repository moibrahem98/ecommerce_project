import React, { useEffect } from "react";
import { Row, Col, Container, DropdownButton, Dropdown } from "react-bootstrap";
import Product from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByCategory,
  listSubCategories,
  listCategories,
} from "../../redux/actions/productActions";

function CategoryPage({ match, history }) {
  const dispatch = useDispatch();

  const categoriesList = useSelector((state) => state.categoriesList);
  const { categories } = categoriesList;
  const categoryProducts = useSelector((state) => state.categoryProducts);
  const { products } = categoryProducts;
  const subcategoriesList = useSelector((state) => state.subcategoriesList);
  const { subcategories } = subcategoriesList;

  let name = history.location.search;
  useEffect(() => {
    dispatch(listSubCategories());
    dispatch(listCategories());

    dispatch(getProductByCategory(match.params.id, name));
  }, [dispatch, match, name]);

  if (!products) return null;
  if (!categories) return null;

  if (!subcategories) return null;

  return (
    <div className="py-5">
      {categories.map((category) => (
        <p key={category.id}>
          {category.id == match.params.id && (
            <h2 className="text-right">{category.name}</h2>
          )}
        </p>
      ))}{" "}
      {products.length === 0 ? (
        <div className=" p-3 m-auto rounded-lg" style={{ textAlign: "center" }}>
          <h4>عفوا هذا القسم لا يحتوى على منتجات بعد</h4>
          <a href="/" className="btn btn_color ">
            الرجوع للصفحه الرئيسيه
          </a>
        </div>
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
