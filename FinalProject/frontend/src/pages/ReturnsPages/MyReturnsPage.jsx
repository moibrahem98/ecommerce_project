import React, { useState, useEffect } from "react";
import { Button, Row, Col, Table, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { listMyReturnsFunction } from "../../actions/productActions";

function MyReturnsPage({ history }) {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const listMyReturns = useSelector((state) => state.listMyReturns);
  const {
    loading: loadingReturns,
    error: errorReturns,
    returns,
  } = listMyReturns;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || userInfo._id !== user._id) {
        dispatch(listMyReturnsFunction());
      }
    }
  }, [dispatch, history, userInfo, user]);

  return (
    <div className="py-5 text-center" style={{ alignItems: "center" }}>
      <h2 style={{ textAlign: "center" }}>My Returns</h2>
      <Row md={9}>
        {loadingReturns ? (
          <Loader />
        ) : errorReturns ? (
          <Message variant="danger">{errorReturns}</Message>
        ) : (
          <Row>
            {" "}
            {returns.map((ret) => (
              <Card md={4} className="pt-2 rounded text-center">
                <Card.Title style={{ marginTop: "5px" }}>
                  <a
                    style={{ color: "black" }}
                    href={`/returndetails/${ret.id}`}
                  >
                    {" "}
                    <h5>Issue:{ret.title}</h5>
                  </a>
                </Card.Title>
                <Card.Body>
                  <h6>Details:</h6>
                  <p>
                    <strong> {ret.issue}</strong>
                    <hr />
                    <strong>Product: </strong>
                    {ret.product_name}
                    <hr />
                    <strong>Order Number: </strong>
                    {ret.order_num}
                  </p>
                </Card.Body>
                <Card.Footer>
                  {" "}
                  <strong> Issue State : </strong>
                  <h6 className="d-inline">
                    {ret.issue_status ? <i> Solved </i> : <i>Not Solved </i>}
                  </h6>
                  <br></br>
                </Card.Footer>
              </Card>
            ))}
          </Row>
        )}
      </Row>
    </div>
  );
}

export default MyReturnsPage;
