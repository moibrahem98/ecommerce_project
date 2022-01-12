import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductBySubCategory,
  listSubCategories,
} from "../../redux/actions/productActions";

function SubCategoryPage({ match, history }) {
  const dispatch = useDispatch();

  const subcategoryProducts = useSelector((state) => state.subcategoryProducts);
  const { product } = subcategoryProducts;
  const subcategoriesList = useSelector((state) => state.subcategoriesList);
  const { subcategories } = subcategoriesList;
  useEffect(() => {
    dispatch(listSubCategories());
    dispatch(getProductBySubCategory(match.params.id));
  }, [dispatch, match]);
  if (!product) return null;
  if (!subcategories) return null;
  return (
    <div>
      {subcategories.map((subcategory) => (
        <p key={subcategory.id}>
          {subcategory.id == match.params.id && (
            <h2 className="text-right">{subcategory.name}</h2>
          )}
        </p>
      ))}
      {product.length === 0 ? (
        <div className=" p-3 m-auto rounded-lg" style={{ textAlign: "center" }}>
          <h4>عفوا هذا القسم لا يحتوى على منتجات بعد</h4>
          <a href="/" className="btn btn_color ">
            الرجوع للصفحه الرئيسيه
          </a>
        </div>
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
