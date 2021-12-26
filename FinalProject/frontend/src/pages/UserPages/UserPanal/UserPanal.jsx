import { Card, Col, Row } from "react-bootstrap";
import "./UserPanal.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { listMyReturnsFunction } from "../../../actions/productActions";

import { listMyOrders } from "../../../actions/orderActions";

function UserPanal({ history }) {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;
  const listMyReturns = useSelector((state) => state.listMyReturns);
  const {
    loading: loadingReturns,
    error: errorReturns,
    returns,
  } = listMyReturns;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || userInfo._id !== user._id) {
        dispatch(listMyOrders());
        dispatch(listMyReturnsFunction());
      }
    }
  }, [dispatch, history, userInfo, user]);

  console.log(userInfo, "llllllllllllllllllll");
  if (!orders) return null;
  if (!userInfo) return null;
  if (!returns) return null;
  return (
    <div>
      <h1>Profile</h1>

      <div className="container">
        <Row>
          <Col md={6}>
            <div className="card bg-success" style={{ height: "200px" }}>
              <div className="card-statistic-3 p-4">
                <div
                  className="card-icon card-icon-large"
                  style={{ fontSize: "75px" }}
                >
                  <i class="far fa-user-circle"></i>
                </div>
                <div className="mb-4">
                  <a href="/profile">
                    {" "}
                    <h4 style={{ color: "white" }} className="card-title mb-0">
                      Profile
                    </h4>
                  </a>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h1
                      style={{
                        color: "white",
                        marginTop: "40px",
                        fontSize: "30px",
                        fontFamily: "monospace",
                      }}
                      className="d-flex align-items-center mb-0"
                    >
                      {userInfo.name}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="card bg-warning" style={{ height: "200px" }}>
              <div className="card-statistic-3 p-4">
                <div
                  className="card-icon card-icon-large"
                  style={{ fontSize: "75px" }}
                >
                  <i class="far fa-shopping-bag"></i>
                </div>
                <div className="mb-4">
                  <a href="/myorders">
                    {" "}
                    <h4 style={{ color: "white" }} className="card-title mb-0">
                      My Orders
                    </h4>
                  </a>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h1
                      style={{
                        color: "white",
                        marginTop: "20px",
                        fontSize: "60px",
                      }}
                      className="d-flex align-items-center mb-0"
                    >
                      {orders.length}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="card bg-danger" style={{ height: "200px" }}>
              <div className="card-statistic-3 p-4">
                <div
                  className="card-icon card-icon-large"
                  style={{ fontSize: "75px" }}
                >
                  <i class="far fa-undo-alt"></i>
                </div>
                <div className="mb-4">
                  <a href="/myreturns">
                    {" "}
                    <h4 style={{ color: "white" }} className="card-title mb-0">
                      My Returns
                    </h4>
                  </a>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h1
                      style={{
                        color: "white",
                        marginTop: "20px",
                        fontSize: "60px",
                      }}
                      className="d-flex align-items-center mb-0"
                    >
                      {returns.length}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="card bg-info" style={{ height: "200px" }}>
              <div className="card-statistic-3 p-4">
                <div
                  className="card-icon card-icon-large"
                  style={{ fontSize: "75px" }}
                >
                  <i class="far fa-pencil"></i>
                </div>
                <div className="mb-4">
                  <a href="/update">
                    {" "}
                    <h4 style={{ color: "white" }} className="card-title mb-0">
                      Update Profile{" "}
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default UserPanal;
