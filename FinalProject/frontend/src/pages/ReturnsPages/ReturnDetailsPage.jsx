import React, { useState, useEffect } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { payOrder } from "../../redux/actions/orderActions";
import {
  getReturnsDetails,
  issueStatus,
} from "../../redux/actions/productActions";
import Message from "../../components/Message";
import Loader from "../../components/Loader";

function ReturnsDetailsPage({ match, history }) {
  const dispatch = useDispatch();

  const returnDetails = useSelector((state) => state.returnDetails);
  const { loading, error, returns } = returnDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(getReturnsDetails(match.params.id));
  }, [dispatch, match]);
  const issueHandler = () => {
    dispatch(issueStatus(returns));
  };

  if (!returns) return null;
  return (
    <div>
      <Row className="mt-5">
        <Col lg={5} md={6} sm={12} className="p-3 m-auto shadow rounded-lg">
          <Row>
            <Col>
              {" "}
              <h1>Return Request No.{returns.id}</h1>
              <hr />
              <h4 style={{ textAlign: "center" }}> Details </h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <strong> User Name:</strong>
              <h6 className="d-inline"> {returns.user.name} </h6>
            </Col>
            <Col>
              <strong> Filed at:</strong>
              <h6 className="d-inline">
                {returns.created_at.substring(0, 10)}{" "}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <strong> Product Name :</strong>
              <h6 className="d-inline"> {returns.product_name} </h6>
            </Col>
            <Col>
              <strong> Order Number :</strong>
              <h6 className="d-inline"> {returns.order_num} </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <strong> Complain :</strong>
              <h6 className="d-inline"> {returns.title} </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <strong> Details :</strong>
              <h6 className="d-inline"> {returns.issue} </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <strong> Issue State :</strong>
              <h6 className="d-inline">
                {returns.issue_status ? <i> Solved </i> : <i>Not Solved </i>}
              </h6>
            </Col>
          </Row>
          <Row>
            {" "}
            <Col>
              {userInfo && userInfo.isAdmin && !returns.issue_status && (
                <Button
                  variant="dark"
                  type="button"
                  className="btn btn-block  btn_color"
                  onClick={issueHandler}
                >
                  Mark As Solved
                </Button>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ReturnsDetailsPage;

// function ReturnDetailsPage({ history, match }) {
//   const returnId = match.params.id;
//   console.log(returnId, "+++++++++++++++++++");
//   // const returnsDetails = useSelector((state) => state.returnsDetails);
//   // const { data } = returnsDetails;
//   const [returns, setReturns] = useState("");
//   const dispatch = useDispatch();

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;
//   useEffect(() => {
//     const getReturnDetails = (returnId) => async () => {
//       await axios.get(`/product/api/returns/${returnId}/`).then((response) => {
//         setReturns(response.data);
//       });
//     };
//     getReturnDetails();
//     // dispatch(getReturnsDetails(returnId));
//   }, [dispatch, history, userInfo, returnId, returns]);

//   //   console.log(userInfo.isAdmin, "userInfo.isAdmin");
//   //   console.log(userInfo, "userInfo");
//   console.log(returns, "returns");
//   // if (!returns) return null;
//   return <div>{/* <div>{returns.title}</div> */}</div>;
// }
// export default function ReturnsListPage({ history }) {
//   const [returns, setReturns] = useState(null);
//   const dispatch = useDispatch();

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;
//   useEffect(() => {
//     if (userInfo && userInfo.isAdmin) {
//       axios.get("/product/api/returns/").then((response) => {
//         setReturns(response.data);
//       });
//     } else {
//       history.push("/login");
//     }
//   }, [, history, userInfo]);
//   //   useEffect(() => {
//   //     axios.get("/product/api/returns/").then((response) => {
//   //       setReturns(response.data);
//   //     });
//   //   }, []);

//   console.log(userInfo.isAdmin, "userInfo.isAdmin");
//   console.log(userInfo, "userInfo");
//   console.log(returns, "returns");
//   if (!returns) return null;
//   if (!userInfo && !userInfo.isAdmin) {
//     return <p>not allowed</p>;
//   } else {
//     return (
//       <div>
//         <h1>Returns Requests:</h1>

//         <div>
//           {returns.map((ret) => (
//             <p>{ret.title}</p>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// function ReturnDetailsPage({ match }) {
//   const returnId = match.params.id;
//   const dispatch = useDispatch();

//   //   const orderDetails = useSelector((state) => state.orderDetails);
//   //   const { order, error, loading } = orderDetails;

//   const returnsDetails = useSelector((state) => state.returnsDetails);
//   const { returns, error, loading } = returnsDetails;

//   const orderPay = useSelector((state) => state.orderPay);
//   const { loading: loadingPay, success: successPay } = orderPay;

//   const issueState = useSelector((state) => state.issueState);
//   const { loading: loadingIssue, success: successIssue } = issueState;

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   useEffect(() => {
//     if (
//       !returns ||
//       returns.id !== Number(returnId) ||
//       successPay ||
//       successIssue
//     ) {
//       dispatch(getReturnsDetails(returnId));
//     }
//   }, [dispatch, returns, returnId, successPay, successIssue]);

//   //   const payHandler = () => {
//   //     dispatch(payOrder(order));
//   //   };

//   return (
//     <div>
//       <div>{returns.title}</div>
//     </div>
//   );
// }
