import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { Link } from "react-router-bootstrap";

function ProfileScreen({ history }) {
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
    <>
      <Container>
        <div className="border w-50 rounded m-auto">
          <h1
            className=" rounded mt-2"
            style={{
              fontFamily: "monospace",
              textAlign: "center",
              backgroundColor: "WhiteSmoke",
            }}
          >
            {" "}
            User Profile
          </h1>
          <Card md={4}>
            <Card.Body>
              <Card.Text>
                {" "}
                <strong>Name:</strong> {name}
              </Card.Text>
              <hr></hr>
              <Card.Text>
                {" "}
                <strong>Email:</strong> {email}
              </Card.Text>
              <hr></hr>
              <a
                className="btn btn-dark text-success align-center btn_color"
                href="/update"
              >
                Update Data
              </a>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default ProfileScreen;
