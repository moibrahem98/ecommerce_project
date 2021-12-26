import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getUserDetails } from "../actions/userActions";

function ProfileScreen({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || userInfo._id !== user._id) {
        dispatch({ type: "USER_UPDATE_PROFILE_RESET" });
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Container style={{ marginTop: "150px", marginBottom: "150px" }}>
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
      )}
    </div>
  );
}

export default ProfileScreen;
