import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function CheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>تسجيل الدخول</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>تسجيل الدخول</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>تفاصيل الشحن</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>تفاصيل الشحن</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>تفاصيل الدفع</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>تفاصيل الدفع</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>تأكيد الطلب</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>تأكيد الطلب</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
}

export default CheckoutSteps;
