import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col ,Container} from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { FormContainer } from "../components/FormContainer";
function LoginScreen({ location, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);

  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
  };
  return (
<Container>
<Row className="mt-5">

  <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-lg rounded-lg">
  <h3 className=" text-success mt-1 p-2 text-center ">CUSTOMER LOGIN</h3>

    {" "}
    <Form onSubmit={submitHandler}>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader></Loader>}

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></Form.Control>
      </Form.Group>
      <br></br>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></Form.Control>
      </Form.Group>
      <br></br>
      <Button type="submit" variant="dark" className="w-100 text-success">
       LOGLN{" "}
      </Button>
    </Form>
    <br></br>
    <Row>
      <Col>
        Don't Have Account ?{" "}
        <Link
          className="btn btn-secondary "
          to={redirect ? `/register?redirect=${redirect}` : "/register"}
        >
          CREATE ACCOUNT
        </Link>
      </Col>{" "}
    </Row>
  </Col>
</Row>
</Container>
);
}


export default LoginScreen;
