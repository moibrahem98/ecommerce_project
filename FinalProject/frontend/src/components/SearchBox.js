import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");

  let history = useHistory();
  const submitHandler = (event) => {
    event.preventDefault();
    if (keyword) {
      history.push(`/?keyword=${keyword}`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };
  return (
    <Form onSubmit={submitHandler}>
      {/* <Form.Control
        type="text"
        name="q"
        className="mr-sm-2 ml-sm-5"
        onChange={(event) => setKeyword(event.target.value)}
      ></Form.Control> */}

      <Button variant="success" className="p-1" type="submit">
        <i className=" fa fa-search"></i>
      </Button>
      <input
        type="text"
        name="q"
        className=" p-1"
        placeholder="search"
        onChange={(event) => setKeyword(event.target.value)}
      />
    </Form>
  );
}

export default SearchBox;
