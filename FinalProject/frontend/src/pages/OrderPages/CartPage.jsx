import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Container,
} from "react-bootstrap";
import Message from "../../components/Message";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

function CartPage({ match, location, history }) {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  console.log(cartItems, "llllllllllllllllll");
  return (
    <Container className="pt-5">
      <Row className="text-right">
        <Col md={8} sm={12}>
          <h3>السله</h3>
          {cartItems.length === 0 ? (
            <Message variant="info">
              السله فارغه{" "}
              <Link className="text-light pl-3" to="">
                رجوع
              </Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>

                    <Col md={2}>{item.price}جنيه</Col>

                    <Col md={3} className="d-flex justify-content-between my-3">
                      <Form.Control
                        rounded
                        style={{
                          border: "1px solid  #e3e3e3",
                          borderRadius: "11px",
                        }}
                        className="mr-3"
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.stock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                      <div>
                        <Button
                          type="button"
                          variant="outline-danger"
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>

        <Col md={4} sm={12}>
          <Card className=" shadow rounded-sm">
            <ListGroup>
              <ListGroup.Item>
                <h3
                  className="rounded p-3"
                  style={{
                    fontFamily: "monospace",
                    textAlign: "center",
                    backgroundColor: "WhiteSmoke",
                  }}
                >
                  المجموع
                </h3>
                <hr />
                <p>
                  {cartItems.reduce((acc, item) => acc + item.qty, 0)} منتجات
                </p>
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}{" "}
                جنيه
              </ListGroup.Item>
            </ListGroup>

            <ListGroup.Item>
              <Button
                variant="dark"
                className=" text-success w-100 btn_color"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                متابعه
              </Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage;
