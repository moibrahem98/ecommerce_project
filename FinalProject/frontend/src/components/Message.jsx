import React from "react";
import { Button } from "react-bootstrap";
function Message({ variant, children }) {
  return (
    <Button disabled variant={variant}>
      {children}
    </Button>
  );
}
export default Message;
