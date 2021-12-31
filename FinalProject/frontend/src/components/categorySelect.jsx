import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Table,
  Button,
  Form,
  Col,
  ListGroup,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listCategories } from "../redux/actions/productActions";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function InternalSearch() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [minprice, setMinprice] = useState("");
  const [maxprice, setMaxprice] = useState("");

  let history = useHistory();
  const submitHandler = (event) => {
    event.preventDefault();
    if (name) {
      history.push(
        `/?name=${name}&price_min=${minprice}&price_max=${maxprice}`
      );
    } else {
      history.push(history.push(history.location.pathname));
    }
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Col md={4}>
        <Card className=" shadow rounded-sm" style={{ alignItems: "center" }}>
          <Form onSubmit={submitHandler} inline style={{ marginTop: "15px" }}>
            <ListGroup>
              <label for="search" class="form-label">
                Search
              </label>

              <input
                className="form-control d-inline m-3"
                type="text"
                name="q"
                placeholder="search"
                onChange={(event) => setName(event.target.value)}
              />
            </ListGroup>
            <ListGroup>
              <label for="search" class="form-label">
                Price
              </label>

              <div className="d-inline">
                <input
                  type="text"
                  price="1"
                  style={{ width: "150px " }}
                  className=" form-control d-inline"
                  onChange={(event) => setMinprice(event.target.value)}
                  placeholder="Min Price"
                />
                <input
                  type="text"
                  price="1"
                  style={{ width: "150px " }}
                  className=" form-control d-inline"
                  onChange={(event) => setMaxprice(event.target.value)}
                  placeholder="Max Price"
                />
              </div>
            </ListGroup>
          </Form>
        </Card>
      </Col>
    </div>
  );
}

export default InternalSearch;
