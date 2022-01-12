import React, { useEffect } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getReturnsDetails,
  issueStatus,
} from "../../redux/actions/productActions";

function ReturnsDetailsPage({ match, history }) {
  const dispatch = useDispatch();

  const returnDetails = useSelector((state) => state.returnDetails);
  const { returns } = returnDetails;

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
      <Row className="my-5">
        <Col lg={5} md={6} sm={12} className="p-3 m-auto shadow rounded-lg">
          <Row>
            <Col>
              {" "}
              <h1>طلب إرجاع رقم:{returns.id}</h1>
              <hr />
              <h4 style={{ textAlign: "center" }}> التفاصيل: </h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <strong> إسم المستخدم</strong>
              <h6 className="d-inline"> {returns.user.name} </h6>
            </Col>
            <Col>
              <strong> تاريخ الطلب:</strong>
              <h6 className="d-inline">
                {returns.created_at.substring(0, 10)}{" "}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <strong> إسم المنتج :</strong>
              <h6 className="d-inline"> {returns.product_name} </h6>
            </Col>
            <Col>
              <strong> رقم الطلب :</strong>
              <h6 className="d-inline"> {returns.order_num} </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <strong> الشكوي :</strong>
              <h6 className="d-inline"> {returns.title} </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <strong> التفاصيل :</strong>
              <h6 className="d-inline"> {returns.issue} </h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <strong> حاله طلب الارجاع:</strong>
              <h6 className="d-inline">
                {returns.issue_status ? (
                  <i> تم حل المشكله </i>
                ) : (
                  <i>ما زالت معلقة</i>
                )}
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
                  تحديث الحالة لتم الحل
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
