import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";

import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { listOrders } from "../../redux/actions/orderActions";

function OrderListPage({ history }) {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  let hist = useHistory();
  return (
    <div>
      <Button onClick={() => hist.goBack()} className="btn btn-light my-3">
        رجوع
      </Button>
      <h2 className="text-right">الطلبات</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>رقم</th>
              <th>مستخدم</th>
              <th>تاريخ</th>
              <th>اجمالى</th>
              <th>تم الدفع</th>
              <th>تم التوصيل</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.created_at.substring(0, 10)}</td>
                <td>{order.total_price} جنيه</td>
                <td>
                  {order.is_paid ? (
                    order.paid_at.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  {order.is_delivered ? (
                    order.delivered_at.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>

                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant="light" className="btn-sm btn_color">
                      تفاصيل{" "}
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default OrderListPage;
