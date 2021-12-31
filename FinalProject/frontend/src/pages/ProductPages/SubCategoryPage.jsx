import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductBySubCategory,
  listSubCategories,
} from "../../redux/actions/productActions";
import Message from "../../components/Message";
import Loader from "../../components/Loader";

function SubCategoryPage({ match, history }) {
  const dispatch = useDispatch();

  const subcategoryProducts = useSelector((state) => state.subcategoryProducts);
  const { loading, error, product } = subcategoryProducts;
  const subcategoriesList = useSelector((state) => state.subcategoriesList);
  const { subcategories } = subcategoriesList;
  useEffect(() => {
    dispatch(listSubCategories());
    dispatch(getProductBySubCategory(match.params.id));
  }, [dispatch, match]);
  console.log(product, "lllllllllllllllllllllllllllllllll");
  if (!product) return null;
  if (!subcategories) return null;
  console.log(product, "[ppppppppppppppp");
  return (
    <div>
      {subcategories.map((subcategory) => (
        <p>
          {subcategory.id == match.params.id && (
            <h1 style={{ fontFamily: "monospace" }}>{subcategory.name}</h1>
          )}
        </p>
      ))}
      {product.length === 0 ? (
        <div
          className=" p-3 m-auto shadow rounded-lg"
          style={{ textAlign: "center" }}
        >
          {" "}
          <h4>Sorry This Category does not have products yet.</h4>
          <a href="/" className="btn btn-outline-primary ">
            Go To Home Page
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
