import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { LinkContainer } from "react-router-bootstrap";
import { Button, Card, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { listBrandsFunction } from "../../redux/actions/productActions";

function BrandsListPage({ history }) {
  const dispatch = useDispatch();

  const listBrands = useSelector((state) => state.listBrands);
  const { loading, error, brands } = listBrands;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listBrandsFunction());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);
  let hist = useHistory();

  return (
    <div>
      <Button onClick={() => hist.goBack()} className="btn btn-light my-3">
        Go Back
      </Button>
      <h2>Brands</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {" "}
          {brands.map((brand) => (
            <Card md={4} key={brand.id} className="pt-2 rounded text-center">
              <Card.Title style={{ marginTop: "5px" }}>
                <a style={{ color: "black" }} href={`/brand/${brand.id}`}>
                  {" "}
                  <h5>{brand.name}</h5>
                  <hr />
                </a>
              </Card.Title>
              <Card.Body>
                <a
                  style={{ color: "black" }}
                  href={`/returndetails/${brand.id}`}
                >
                  {" "}
                  <img
                    src={brand.img}
                    alt={brand.name}
                    style={{ width: "100px" }}
                  />
                </a>{" "}
              </Card.Body>
            </Card>
          ))}
        </Row>
      )}
    </div>
  );
}

export default BrandsListPage;
