import React from "react";

import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md="4" className="mx-auto">
            <div className="text-center" style={{ color: "#EFC81A" }}>
              <h4 className="mb-3 fw-bold">Recipe...</h4>
              <h4 className="mb-3 fw-bold">Welcome</h4>
            </div>
            <p class="text-body-secondary text-center mb-4">
              Log in into your existing account
            </p>
            <hr />
            <Card className="border-0">
              <Form>
                <p className="mb-0">Email</p>
                <Form.Control
                  className="mb-3"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Enter email address"
                />
                <p className="mb-0">Password</p>
                <Form.Control
                  className="mb-3"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Password"
                />

                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check // prettier-ignore
                      type={type}
                      id={`default-${type}`}
                      label={`default ${type}`}
                    />
                  </div>
                ))}
                <Button
                  className="d-block w-100 border-0"
                  style={{ backgroundColor: "#EFC81A" }}
                >
                  Submit
                </Button>
              </Form>
              <p className="mt-2">
                Forget Your Password ?{" "}
                <Link
                  to="/auth/forgot"
                  style={{ textDecoration: "none", color: "#EFC81A" }}
                >
                  Click Here
                </Link>
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
