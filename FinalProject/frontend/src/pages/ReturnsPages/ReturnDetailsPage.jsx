import React, { useState, useEffect } from "react";
import { Col, Row, ListGroup, Image, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { payOrder } from "../../actions/orderActions";
import { getReturnsDetails } from "../../actions/productActions";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import axios from "axios";
function ReturnDetailsPage({ history, match }) {
  const returnId = match.params.id;
  // const returnsDetails = useSelector((state) => state.returnsDetails);
  // const { data } = returnsDetails;
  const [returns, setReturns] = useState("");
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    const getReturnDetails = (returnId) => async () => {
      await axios.get(`/product/api/returns/${returnId}/`).then((response) => {
        setReturns(response.data);
      });
    };
    getReturnDetails();
    // dispatch(getReturnsDetails(returnId));
  }, [dispatch, history, userInfo, returnId, returns]);

  //   console.log(userInfo.isAdmin, "userInfo.isAdmin");
  //   console.log(userInfo, "userInfo");
  console.log(returns, "returns");
  // if (!returns) return null;
  return <div>{/* <div>{returns.title}</div> */}</div>;
}
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

export default ReturnDetailsPage;
