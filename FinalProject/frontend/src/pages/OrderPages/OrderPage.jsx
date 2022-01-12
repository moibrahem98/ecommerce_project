import React, { useEffect } from "react";
import { Col, Row, ListGroup, Card, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getOrderDetails,
  deliverOrder,
  payOrder,
} from "../../redux/actions/orderActions";
import Message from "../../components/Message";
import Loader from "../../components/Loader";

function OrderPage({ match }) {
  const orderId = match.params.id;
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { success: successDeliver } = orderDeliver;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!loading && !error) {
    order.itemsPrice = order.orderItems
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  }

  useEffect(() => {
    if (
      !order ||
      order._id !== Number(orderId) ||
      successDeliver ||
      successPay
    ) {
      dispatch({ type: "ORDER_PAY_RESET" });
      dispatch({ type: "ORDER_DELIVER_RESET" });
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, order, orderId, successPay, successDeliver]);

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  const payHandler = () => {
    dispatch(payOrder(order));
  };

  if (loading) {
    return <Loader />;
  } else if (error) {
    return <Message variant="danger">{error}</Message>;
  } else {
    return (
      <div className="py-5">
        <Row>
          <Col md={12}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2 className="text-right">تفاصيل الطلب</h2>
                  {order.orderItems.length === 0 ? (
                    <Message variant="info">صفحه الطلبات فارغه</Message>
                  ) : (
                    <ListGroup variant="flush">
                      <Table
                        striped
                        bordered
                        hover
                        responsive
                        className="table-sm"
                      >
                        <thead>
                          <tr>
                            <td>رقم</td>
                            <td>اسم المنتج</td>
                            <td>الكميه</td>
                            <td>السعر</td>
                            <td>الاجمالى</td>
                          </tr>
                        </thead>
                        <tbody>
                          {order.orderItems.map((item, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>
                                <Link
                                  className="d-inline"
                                  to={`/product/${item.product}`}
                                >
                                  {item.name}
                                </Link>
                              </td>
                              <td>{item.quantity}</td>
                              <td>{item.price} جنيه</td>
                              <td>
                                {" "}
                                {(item.quantity * item.price).toFixed(2)} جنيه
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </ListGroup>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card>
              {" "}
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <p>
                    <h2>عميل</h2>

                    <span>الاسم </span>

                    {order.user.name}
                  </p>
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>وسيله الدفع</h2>

                  <p>{order.payment_method} </p>

                  {order.is_paid ? (
                    <Message variant="success">
                      Paid at {order.paid_at.substring(0, 10)}
                    </Message>
                  ) : (
                    <Message variant="warning">لم يتم الدفع</Message>
                  )}
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>تفاصيل الطلب</h2>
                  <p>تليفون {order.shippingAddress.telephone_number}</p>
                  <p>
                    {order.shippingAddress.address} ,{" "}
                    {order.shippingAddress.city},{" "}
                    {order.shippingAddress.country}
                  </p>
                  {order.is_delivered ? (
                    <Message variant="success">
                      Deliverd at {order.delivered_at.substring(0, 10)}
                    </Message>
                  ) : (
                    <Message variant="warning">لم يتم التوصيل</Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={6}>
            <Card className=" shadow rounded-sm">
              <ListGroup variant="secondary">
                <ListGroup.Item>
                  <h2 style={{ textAlign: "center" }}>الفاتوره</h2>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Col>اجمالى</Col>
                  <Col>{order.itemsPrice} جنيه</Col>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Col>مصاريف الشحن</Col>
                  <Col>{order.shipping_price} جنيه</Col>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Col>الكلى</Col>
                  <Col>{order.total_price} جنيه</Col>
                </ListGroup.Item>
              </ListGroup>
              {userInfo && order.is_paid && order.is_delivered && (
                <ListGroup.Item>
                  <Link
                    variant="dark"
                    className="btn btn-block btn_color"
                    to="/createreturn"
                  >
                    طلب ارجاع
                  </Link>
                </ListGroup.Item>
              )}
              {userInfo && userInfo.isAdmin && !order.is_paid && (
                <ListGroup.Item>
                  <Button
                    variant="dark"
                    type="button"
                    className="btn btn-block text-success btn_color"
                    onClick={payHandler}
                  >
                    تم الدفع ؟
                  </Button>
                </ListGroup.Item>
              )}
              {userInfo && userInfo.isAdmin && !order.is_delivered && (
                <ListGroup.Item>
                  <Button
                    variant="dark"
                    type="button"
                    className="btn btn-block btn_color"
                    onClick={deliverHandler}
                  >
                    تم الوصول ؟
                  </Button>
                </ListGroup.Item>
              )}
              <div>
                {" "}
                <p
                  style={{
                    margin: "15px",
                    padding: "5px",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}
                  className="bg-success  "
                >
                  {" "}
                  تم بنجاح <i className="far fa-check "></i>{" "}
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default OrderPage;
