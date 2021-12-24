import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listCategories } from "../actions/productActions";

function ReturnsListPage({ history }) {
  const dispatch = useDispatch();

  const categoriesList = useSelector((state) => state.categoriesList);
  const { categories } = categoriesList;
  console.log(categoriesList);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch, history]);

  console.log(categories, "cccccccccccccccccccccccc");
  if (!categories) return null;
  return (
    <div>
      <h1>All Categories</h1>
      {categories.map((category) => (
        <div>
          <p>{category.name}</p>
          <LinkContainer to={`/categoryproducts/${category.id}`}>
            <Button variant="light" className="btn-sm btn_color">
              Details{" "}
            </Button>
          </LinkContainer>
        </div>
      ))}
    </div>
  );
}

export default ReturnsListPage;
