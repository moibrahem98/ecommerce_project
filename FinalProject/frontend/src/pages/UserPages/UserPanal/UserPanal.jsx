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
      <h2 className="h2">Profile</h2>

      <div className="container">
        <Row>
          <Col md={6}>
            <div className="card bg-success">
              <div className="card-statistic-3">
                <div>
                  <a href="/profile">
                    <h2 className="card-title d-inline-block pr-1">Profile</h2>
                    <i class="far fa-user-circle text-light ad_icon"></i>
                  </a>
                </div>
                <div className="row align-items-center d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center">
                      {userInfo.name}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="card bg-warning">
              <div className="card-statistic-3">
                <div>
                  <a href="/myorders">
                    {" "}
                    <h2 className="card-title d-inline-block pr-2"> Orders</h2>
                    <i class="far fa-shopping-bag text-light ad_icon"></i>
                  </a>
                </div>
                <div className="row align-items-center d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center">
                      {orders.length}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="card bg-danger">
              <div className="card-statistic-3">
                <div>
                  <a href="/myreturns">
                    <h2 className="card-title d-inline-block pr-2">
                      My Returns
                    </h2>
                    <i class="far fa-undo-alt text-light ad_icon"></i>
                  </a>
                </div>
                <div className="row align-items-centr d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center">
                      {returns.length}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="card bg-info">
              <div className="card-statistic-3">
                <div>
                  <a href="/update">
                    {" "}
                    <h2 className="card-title d-inline-block pr-2">
                      Update Profile
                    </h2>
                    <i className="far fa-pencil text-light ad_icon"></i>
                    <button className="btn btn-block btn-light">Click</button>
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