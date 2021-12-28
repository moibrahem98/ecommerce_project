import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function SearchBox() {
  const [name, setName] = useState("");

  let history = useHistory();
  const submitHandler = (event) => {
    event.preventDefault();
    if (name) {
      history.push(`/search?name=${name}`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };
  return (
    <Form onSubmit={submitHandler} inline>
      <div className="justify-contnet-center text-center my-2 d-flex">
        <input
          className="form-control w-80"
          type="text"
          name="q"
          placeholder="search"
          onChange={(event) => setName(event.target.value)}
        />
        <button className="btn btn-outline-primary">
          <i className="fas fa-search "></i>
        </button>
      </div>
    </Form>
  );
}

export default SearchBox;
