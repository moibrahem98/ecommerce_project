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
    <Form
      onSubmit={submitHandler}
      className="row row-cols-lg-auto g-3 align-items-center"
    >
      <Form.Control
        type="text"
        name="q"
        className="mr-sm-2 ml-sm-5"
        onChange={(event) => setKeyword(event.target.value)}
      ></Form.Control>
      <Button variant="outline-success" className="p-2" type="submit">
        search
      </Button>
    </Form>
  );
}

export default SearchBox;
