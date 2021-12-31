import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  ListGroup,
  Image,
  Card,
  Button,
  Table,
} from "react-bootstrap";
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
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!loading && !error) {
    order.itemsPrice = order.orderItems
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  }

  const [paymob, setPaymob] = useState("");

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
      // dispatch(getData(orderId));
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
                  <h2>Order Details</h2>
                  {order.orderItems.length === 0 ? (
                    <Message variant="info">Your Order Is Empty</Message>
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
                            <td>#</td>
                            <td>Product Name</td>
                            <td>Quantity</td>
                            <td>Price</td>
                            <td>Total</td>
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
                              <td>{item.price} L.E</td>
                              <td>
                                {" "}
                                {(item.quantity * item.price).toFixed(2)} L.E
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
                    <h2>Customer:</h2>

                    <span>Name: </span>

                    {order.user.name}
                  </p>
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>Payment Method</h2>
                  {order.payment_method === "paymob" ? (
                    <Row>
                      <Col>
                        {" "}
                        {order.payment_method}
                        <br />
                        <a
                          href={`http://127.0.0.1:8000/order/api/payment/${orderId}/`}
                        >
                          paymob
                        </a>
                      </Col>
                    </Row>
                  ) : (
                    <p>{order.payment_method} </p>
                  )}

                  {order.is_paid ? (
                    <Message variant="success">
                      Paid at {order.paid_at.substring(0, 10)}
                    </Message>
                  ) : (
                    <Message variant="warning">Not Paid</Message>
                  )}
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>Shippment Details:</h2>
                  <p>Phone Number: {order.shippingAddress.telephone_number}</p>
                  <p>
                    {order.shippingAddress.address} ,{" "}
                    {order.shippingAddress.city},{" "}
                    {order.shippingAddress.country} , Egypt.
                  </p>
                  {order.is_delivered ? (
                    <Message variant="success">
                      Deliverd at {order.delivered_at.substring(0, 10)}
                    </Message>
                  ) : (
                    <Message variant="warning">Not Deliverd</Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={6}>
            <Card className=" shadow rounded-sm">
              <ListGroup variant="secondary">
                <ListGroup.Item>
                  <h2 style={{ textAlign: "center", fontFamily: "monospace" }}>
                    Total
                  </h2>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Col>Sub-Total:</Col>
                  <Col>{order.itemsPrice} L.E</Col>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Col>Shipping:</Col>
                  <Col>{order.shipping_price} L.E</Col>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Col>Total:</Col>
                  <Col>{order.total_price} L.E</Col>
                </ListGroup.Item>
              </ListGroup>
              {userInfo && order.is_paid && order.is_delivered && (
                <ListGroup.Item>
                  <Link
                    variant="dark"
                    className="btn btn-block btn_color"
                    to="/createreturn"
                  >
                    File Return Request
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
                    Mark As Paid
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
                    Mark As Delivered
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
                  order is placed successfully <i className="far fa-check "></i>{" "}
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
