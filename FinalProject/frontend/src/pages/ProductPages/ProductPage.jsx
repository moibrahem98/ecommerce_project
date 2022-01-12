import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Tab,
  Tabs,
  Container,
} from "react-bootstrap";
import Rating from "../../components/Rating";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import {
  listProductDetails,
  createProductReview,
} from "../../redux/actions/productActions";
function ProductPage({ match, history }) {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingProductReview,
    error: errorProductReview,
    success: successProductReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successProductReview) {
      setRating(0);
      setComment("");
      dispatch({ type: "PRODUCT_CREATE_REVIEW_RESET" });
    }
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match, successProductReview]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    );
  };

  let hist = useHistory();
  if (!product) return null;
  return (
    <Container>
      <div>
        <Button onClick={() => hist.goBack()} className="btn btn-light my-3">
          الرجوع
        </Button>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <div>
            <Row>
              <Col md={6}>
                <Image
                  rounded
                  className="hover-overlay"
                  src={product.image}
                  alt={product.name}
                  fluid
                />
              </Col>

              <Col md={6}>
                <Card className="text-right">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h3>{product.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Rating
                        value={product.rating}
                        text={`${product.reviews_number} تقييمات`}
                        color={"#e36f10"}
                      />
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
                <Card className="text-right">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>السعر</Col>
                        <Col>
                          <Row>
                            <strong>{product.price} </strong>
                            <strong>&nbsp;جنيه</strong>
                          </Row>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>متوفر</Col>
                        <Col>
                          {product.stock > 0 ? "نعم متوفر" : "ليس متوفر"}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    {product.stock > 0 && (
                      <ListGroup.Item>
                        <Row>
                          <Col className="m-2">الكميه</Col>
                          <Col xs="auto" className="">
                            <Form.Control
                              rounded
                              className="p-1"
                              style={{
                                textAlign: "center",
                                border: "1px solid  #e3e3e3",
                              }}
                              as="select"
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.stock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )}
                    <ListGroup.Item>
                      <Button
                        onClick={addToCartHandler}
                        className="btn-block w-100 btn_color"
                        disabled={product.stock === 0 ? true : false}
                        type="button"
                      >
                        أضافه الى السله
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
            <hr></hr>

            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="profile" title="وصف">
                <h3 className="text-right">وصف المنتج</h3>
                <p className="text-right">{product.description}</p>
              </Tab>
              <Tab eventKey="home" title="التقيمات">
                <Row>
                  <Col md={6}>
                    <h4 className="text-right">التقييمات</h4>
                    {product.reviews.length === 0 && (
                      <Message variant="info"> لاتوجد تقييمات حتى الان</Message>
                    )}
                    <ListGroup variant="flush" className="text-right">
                      {product.reviews.map((review) => (
                        <ListGroup.Item key={review._id}>
                          <strong>{review.name}</strong>
                          <Rating
                            value={review.rating}
                            color="#e36f10"
                          ></Rating>
                          <p>{review.created_at.substring(0, 10)}</p>
                          <p>{review.comment}</p>
                        </ListGroup.Item>
                      ))}

                      <ListGroup.Item>
                        <br></br>
                        <h4>اضافه تقييم</h4>
                        {loadingProductReview && <Loader></Loader>}
                        {successProductReview && (
                          <Message variant="success">review is added</Message>
                        )}
                        {errorProductReview && (
                          <Message variant="danger">
                            {errorProductReview}
                          </Message>
                        )}
                        {userInfo ? (
                          <Form onSubmit={submitHandler}>
                            <Form.Group controlId="rating">
                              <Form.Label>تقييم</Form.Label>
                              <Form.Control
                                as="select"
                                value={rating}
                                onChange={(event) =>
                                  setRating(event.target.value)
                                }
                              >
                                <option value="">اختر</option>
                                <option value="1">1 سيئ</option>
                                <option value="2">2 معقول</option>
                                <option value="3">3 جيد</option>
                                <option value="4">جيد جدا</option>
                                <option value="5">5 ممتاز</option>
                              </Form.Control>
                            </Form.Group>
                            <br></br>
                            <Form.Group controlId="comment">
                              <Form.Label>تعليق</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows="5"
                                value={comment}
                                onChange={(event) =>
                                  setComment(event.target.value)
                                }
                              ></Form.Control>
                            </Form.Group>
                            <br></br>
                            <Button
                              disapled={loadingProductReview}
                              type="submit"
                              variant="primary"
                              className="btn_color w-25"
                            >
                              أضافه
                            </Button>
                          </Form>
                        ) : (
                          <Message variant="info">
                            من فضلك
                            <Link to="/login"> تسجيل الدخول </Link>
                            سجل الدخول
                          </Message>
                        )}
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </div>
        )}
      </div>
    </Container>
  );
}

export default ProductPage;
