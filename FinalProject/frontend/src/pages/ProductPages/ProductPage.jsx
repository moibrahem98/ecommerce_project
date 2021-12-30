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
  listOffers,
  createProductReview,
} from "../../actions/productActions";
function ProductPage({ match, history }) {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const offersList = useSelector((state) => state.offersList);
  const { offers } = offersList;
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
    dispatch(listOffers());
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
  if (!offers) return null;
  console.log(product, ";;;;;;;;;;;;;;;;;;");
  return (
    <Container>
      <div>
        <Button onClick={() => hist.goBack()} className="btn btn-light my-3">
          Go Back
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
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h3>{product.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Rating
                        value={product.rating}
                        text={`${product.reviews_number} Reviews`}
                        color={"#e36f10"}
                      />
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          {product.offer.value === 1 ? (
                            <Row>
                              <strong>{product.price} </strong>
                              <strong>&nbsp; L.E</strong>
                            </Row>
                          ) : (
                            <Row>
                              <strike>{product.price}&nbsp;</strike>
                              {/* <strong>&nbsp; L.E</strong> */}

                              <strong>
                                &nbsp;{product.price * product.offer.value}
                                &nbsp; L.E
                              </strong>
                            </Row>
                          )}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          {product.stock > 0 ? "In Stock" : "Out of Stock"}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    {product.stock > 0 && (
                      <ListGroup.Item>
                        <Row>
                          <Col className="m-2">Quantity</Col>
                          <Col xs="auto" className="">
                            <Form.Control
                              rounded
                              className="p-1"
                              style={{
                                textAlign: "center",
                                border: "1px solid  #e3e3e3",
                                borderRadius: "15px",
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
                        disabled={product.stock === 0}
                        type="button"
                      >
                        Add to Cart
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
              <Tab eventKey="profile" title="Description">
                <h3>Description</h3>
                {product.description}
              </Tab>
              <Tab eventKey="home" title="Reviews">
                <Row>
                  <Col md={6}>
                    <h4>Reviews</h4>
                    {product.reviews.length === 0 && (
                      <Message variant="info"> No Reviews Yet.</Message>
                    )}
                    <ListGroup variant="flush">
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
                        <h4>Add a review</h4>
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
                              <Form.Label>Rating:</Form.Label>
                              <Form.Control
                                as="select"
                                value={rating}
                                onChange={(event) =>
                                  setRating(event.target.value)
                                }
                              >
                                <option value="">Select</option>
                                <option value="1">1 Not Good</option>
                                <option value="2">2 Fair</option>
                                <option value="3">3 Good</option>
                                <option value="4">4 Very Good</option>
                                <option value="5">5 Excellent</option>
                              </Form.Control>
                            </Form.Group>
                            <br></br>
                            <Form.Group controlId="comment">
                              <Form.Label>Comment:</Form.Label>
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
                              Add
                            </Button>
                          </Form>
                        ) : (
                          <Message variant="info">
                            Please
                            <Link to="/login"> login </Link>
                            to review this product
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