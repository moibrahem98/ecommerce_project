import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function SearchBox() {
  const [name, setName] = useState("");

  let history = useHistory();
  const submitHandler = (event) => {
    event.preventDefault();
    if (name) {
      history.push(`/?name=${name}`);
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
      <div className="position-relative">
        <input
          id="search_box"
          type="text"
          name="q"
          className="form-control m-2"
          style={{ width: "400px" }}
          placeholder="search"
          onChange={(event) => setName(event.target.value)}
        />
        <i class="fas fa-search position-absolute search_icon"></i>
      </div>
      {/* <button className="btn btn-outline-success" type="submit">
        <i className=" fa fa-search"></i>
      </button> */}
    </Form>
  );
}

export default SearchBox;
