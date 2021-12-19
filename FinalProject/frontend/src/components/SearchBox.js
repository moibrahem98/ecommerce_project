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
    <Form onSubmit={submitHandler} inline>
      {/*       

      <Button variant="success" className="p-1" type="submit">
        <i className=" fa fa-search"></i>
      </Button> */}

      <input
        type="text"
        name="q"
        className="form-control m-2"
        style={{ width: "700px" }}
        placeholder="search"
        onChange={(event) => setKeyword(event.target.value)}
      />
      {/* <button className="btn btn-outline-success" type="submit">
        <i className=" fa fa-search"></i>
      </button> */}
    </Form>
  );
}

export default SearchBox;
