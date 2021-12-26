import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { listReturns } from "../../actions/productActions";

function ReturnsListPage({ history }) {
  const dispatch = useDispatch();

  const returnsList = useSelector((state) => state.returnsList);
  const { loading, error, returns } = returnsList;
  console.log(returnsList, "listllllllllllllllllllllll");
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listReturns());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);
  return (
    <div>
      <h2>Returns Requests</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>USER</th>
              <th>FILE DATE</th>
              <th>PRODUCT NAME</th>
              <th>ORDER NUMBER</th>
              <th>STATUS</th>
            </tr>
          </thead>

          <tbody>
            {returns.map((ret) => (
              <tr key={ret.id}>
                <td>{ret.id}</td>
                <td>{ret.title}</td>
                <td>{ret.user.name}</td>
                <td>{ret.created_at.substring(0, 10)}</td>
                <td>{ret.product_name}</td>
                <td>{ret.order_num}</td>
                <td>
                  {ret.issue_status ? (
                    <i className="fas fa-check" style={{ color: "green" }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/returndetails/${ret.id}`}>
                    <Button variant="light" className="btn-sm btn_color">
                      Details{" "}
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default ReturnsListPage;
