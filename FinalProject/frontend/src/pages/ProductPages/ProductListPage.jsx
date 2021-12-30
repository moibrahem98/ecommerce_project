import React, { useState, useEffect } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { listProducts, deleteProduct } from "../../actions/productActions";
import { LinkContainer } from "react-router-bootstrap";

function ProductListPage({ history, match }) {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  let hist = useHistory();

  useEffect(() => {
    dispatch({ type: "PRODUCT_CREATE_RESET" });

    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo, successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div>
      <Button onClick={() => hist.goBack()} className="btn btn-light my-3">
        Go Back
      </Button>
      <Row className="align-items-center">
        <Col md={9}>
          <h1>Products</h1>
        </Col>

        <Col className="text-right" md={3}>
          <Link to="/admin/createproduct">
            <Button className="my-3 btn_color">
              <i className="fas fa-plus"></i> Create Product
            </Button>
          </Link>
        </Col>
      </Row>

      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>SUB CATEGORY</th>
                <th>BRAND</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>
                    <a href={`/product/${product._id}`}>
                      <strong>{product.name}</strong>
                    </a>
                  </td>
                  <td>{product.price} L.E</td>
                  <td>{product.category1.name}</td>
                  <td>{product.subcategory1.name}</td>
                  <td>{product.brand1.name}</td>
                  <td>
                    {" "}
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(product._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default ProductListPage;