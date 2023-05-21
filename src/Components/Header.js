import React from "react";
import { Card, CardBody } from "reactstrap";

function Header() {
  return (
    <Card>
      <CardBody className="my-2 bg-warning">
        <div>
          <h1 className="text-center my-3">This is my Courses Application</h1>
        </div>
      </CardBody>
    </Card>
  );
}
export default Header;
