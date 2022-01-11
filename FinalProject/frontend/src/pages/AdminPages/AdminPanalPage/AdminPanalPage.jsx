import React, { useEffect } from "react";
import "./AdminPanalPage.css";
import { Row, Col } from "react-bootstrap";
import { listReturns } from "../../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../../../redux/actions/orderActions";
import { listUsers } from "../../../redux/actions/userActions";
import { listProducts } from "../../../redux/actions/productActions";
export default function AdminPanalPage({ history }) {
  const dispatch = useDispatch();

  const returnsList = useSelector((state) => state.returnsList);
  const { returns } = returnsList;

  const orderList = useSelector((state) => state.orderList);
  const { orders } = orderList;
  const userList = useSelector((state) => state.userList);
  const { users } = userList;
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listReturns());
      dispatch(listOrders());
      dispatch(listUsers());
      dispatch(listProducts());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  if (!returns) return null;
  if (!orders) return null;
  if (!users) return null;
  if (!products) return null;
  return (
    <div style={{ marginTop: "150px" }}>
      <h2 className="h2" style={{ textAlign: "center" }}>
        لوحه التحكم
        <hr />
      </h2>

      <div className="container">
        <Row className="text-right">
          <Col md={6}>
            <div className="ad_card bg-success">
              <div className="card-statistic-3">
                <div>
                  <a href="/admin/userlist">
                    <i class="far fa-user-circle text-light ad_icon"></i>
                    <h2 className="ad_card_title d-inline-block pr-1">
                      المستخدمين
                    </h2>
                  </a>
                </div>
                <div className="row align-items-center d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center">
                      {users.length}{" "}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="ad_card bg-warning">
              <div className="card-statistic-3">
                <div>
                  <a href="/admin/orderlist">
                    <i class="far fa-shopping-bag text-light ad_icon"></i>
                    <h2 className="ad_card_title d-inline-block pr-2">
                      الطلبات
                    </h2>
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
            <div className="ad_card bg-danger">
              <div className="card-statistic-3">
                <div>
                  <a href="/admin/returnslist">
                    <i class="far fa-undo-alt text-light ad_icon"></i>
                    <h2 className="ad_card_title d-inline-block pr-2">
                      المرتجعات
                    </h2>
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
            <div className="ad_card bg-info">
              <div className="card-statistic-3">
                <div>
                  <a href="/admin/productlist">
                    <i className="far fa-box-check text-light ad_icon"></i>
                    <h2 className="ad_card_title d-inline-block pr-2">
                      المنتجات
                    </h2>
                  </a>
                </div>
                <div className="row align-items-centr d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center">
                      {products.length}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
