import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col ,Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getUserDetails, updateUserProfile } from "../actions/userActions";

function UpdateProfileScreen({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || success || userInfo._id !== user._id) {
        dispatch({ type: "USER_UPDATE_PROFILE_RESET" });
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          name: name,
          email: email,
          password: password,
        })
      );
      setMessage("");
    }
  };
  return (
    // <Row>
    //   <Col md={9}>
    //     <h2>Update User Profile</h2>

    //     {message && <Message variant="danger">{message}</Message>}
    //     {error && <Message variant="danger">{error}</Message>}
    //     {loading && <Loader />}
    //     <Form onSubmit={submitHandler}>
    //       <Form.Group controlId="name">
    //         <Form.Label>Name</Form.Label>
    //         <Form.Control
    //           required
    //           type="name"
    //           placeholder="Enter name"
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //         ></Form.Control>
    //       </Form.Group>

    //       <Form.Group controlId="email">
    //         <Form.Label>Email Address</Form.Label>
    //         <Form.Control
    //           required
    //           type="email"
    //           placeholder="Enter Email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         ></Form.Control>
    //       </Form.Group>

    //       <Form.Group controlId="password">
    //         <Form.Label>Password</Form.Label>
    //         <Form.Control
    //           type="password"
    //           placeholder="Enter Password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         ></Form.Control>
    //       </Form.Group>

    //       <Form.Group controlId="passwordConfirm">
    //         <Form.Label>Confirm Password</Form.Label>
    //         <Form.Control
    //           type="password"
    //           placeholder="Confirm Password"
    //           value={confirmPassword}
    //           onChange={(e) => setConfirmPassword(e.target.value)}
    //         ></Form.Control>
    //       </Form.Group>

    //       <Button type="submit" variant="dark" className="w-100 text-success btn_color">
    //         Update
    //       </Button>
    //     </Form>
    //   </Col>
    // </Row>
    <Container>
    <Row className="mt-5">
    <Col lg={5} md={6} sm={12} className="p-3 m-auto shadow rounded-lg">
     <h1 className=" text-succes mt-1 p-1 text-center ">Update User Profile</h1>

      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="passwordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="dark" className="w-100 text-success btn_color">
          Update
        </Button>
      </Form>
    </Col>
  </Row>
  </Container>

  );
}

export default UpdateProfileScreen;
