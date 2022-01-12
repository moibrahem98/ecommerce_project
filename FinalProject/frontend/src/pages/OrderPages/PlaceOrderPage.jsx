import React, { useEffect } from "react";
import { Col, Row, ListGroup, Card, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../../redux/actions/orderActions";
import Message from "../../components/Message";
import CheckoutSteps from "../../components/CheckoutSteps";

function PlaceOrderPage({ history }) {
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, error, success } = orderCreate;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  cart.itemsPrice = cart.cartItems
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

  if (cart.itemsPrice > 500) {
    (cart.shippingPrice = 0).toFixed(2);
  } else {
    (cart.shippingPrice = 50).toFixed(2);
  }
  cart.totalPrice = (
    Number(cart.shippingPrice) + Number(cart.itemsPrice)
  ).toFixed(2);

  if (!cart.paymentMethod) {
    history.push("/payment");
  }

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      dispatch({ type: "ORDER_CREATE_RESET" });
    }
  }, [success, history, dispatch, order._id]);

  const placeOrder = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };
  return (
    <div className="py-5">
      <CheckoutSteps
        className=" shadow rounded-sm"
        step1
        step2
        step3
        step4
      ></CheckoutSteps>

      <Card className="shadow rounded-sm">
        <Col md={12}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>تفاصيل الطلب</h2>
              <hr />
              {cart.cartItems.length === 0 ? (
                <Message variant="info">السله فارغه</Message>
              ) : (
                <ListGroup variant="flush">
                  <Table striped bordered hover responsive className="table-sm">
                    <thead>
                      <tr>
                        <td>#</td>
                        <td>اسم المنتج</td>
                        <td>الكميه</td>
                        <td>السعر</td>
                        <td>اجمالى</td>
                      </tr>
                    </thead>{" "}
                    <tbody>
                      {cart.cartItems.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </td>
                          <td> {item.qty}</td>
                          <td>{item.price} L.E </td>
                          <td>{(item.qty * item.price).toFixed(2)} L.E</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Card>

      <Row>
        <Col md={6}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4>وسيله الدفع</h4>
                <p> {cart.paymentMethod}</p>
              </ListGroup.Item>

              <ListGroup.Item>
                <h2>تفاصيل الطلب</h2>
                <p>رقم التليفون {cart.shippingAddress.telephoneNumber}</p>
                <p>
                  {" "}
                  عنوان: {cart.shippingAddress.address} ,{" "}
                  {cart.shippingAddress.city}, {cart.shippingAddress.country}
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow rounded-sm">
            <ListGroup variant="secondary">
              <ListGroup.Item>
                <h2 style={{ textAlign: "center" }}>اجمالى</h2>
              </ListGroup.Item>

              <ListGroup.Item>
                <Col>الاجمالى</Col>
                <Col>{cart.itemsPrice} جنيه</Col>
              </ListGroup.Item>

              <ListGroup.Item>
                <Col>مصاريف شحن</Col>
                <Col>{cart.shippingPrice}جنيه</Col>
              </ListGroup.Item>

              <ListGroup.Item>
                <Col>الكلى</Col>
                <Col>{cart.totalPrice} L.E</Col>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  variant="dark"
                  type="button"
                  className="btn text-success w-100 btn_color"
                  disapled={cart.cartItems === 0}
                  onClick={placeOrder}
                >
                  متابعه
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default PlaceOrderPage;
