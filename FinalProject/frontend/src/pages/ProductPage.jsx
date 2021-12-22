import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {
  listProductDetails,
  createProductReview,
} from "../actions/productActions";
import { LinkContainer } from "react-router-bootstrap";
function ProductScreen({ match, history }) {
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

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
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

            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{product.name}</h3>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Rating
                      value={product.rating}
                      text={`${product.reviews_number} reviews`}
                      color={"#e36f10"}
                    />
                  </ListGroup.Item>

                  <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

                  <ListGroup.Item>
                    Description: {product.description}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>

            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
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
                        <Col className="m-2">Qty</Col>
                        <Col xs="auto" className="">
                          <Form.Control
                            rounded
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
                      className="btn-block w-100"
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
                    <Rating value={review.rating} color="#e36f10"></Rating>
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
                    <Message variant="danger">{errorProductReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId="rating">
                        <Form.Label>Rating:</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(event) => setRating(event.target.value)}
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
                          onChange={(event) => setComment(event.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <br></br>
                      <Button
                        disapled={loadingProductReview}
                        type="submit"
                        variant="primary"
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
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
