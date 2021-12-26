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
      history.push(`/?name=${name}`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };
  return (
    <Form onSubmit={submitHandler} inline>
      <div className="search_bar">
        <input
          type="text"
          name="q"
          className="typing"
          placeholder="search"
          onChange={(event) => setName(event.target.value)}
        />
        <Link className="btn btn_search" to="#!">
          <i className="fas fa-search"></i>
        </Link>
      </div>
    </Form>
  );
}

export default SearchBox;
