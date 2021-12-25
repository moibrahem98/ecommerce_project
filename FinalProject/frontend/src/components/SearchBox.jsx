import React, { useState } from "react";
import { Form } from "react-bootstrap";
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
      <div className="position-relative">
        <input
          id="search_box"
          type="text"
          name="q"
          className="form-control m-1"
          style={{ width: "200px" }}
          placeholder="search"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
    </Form>
  );
}

export default SearchBox;
