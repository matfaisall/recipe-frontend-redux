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
                <p className="mb-2">Email</p>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    id="email"
                    className="py-3 bg-body-tertiary"
                    placeholder="Enter Email Address"
                  />
                </Form.Group>

                <p className="mb-2">Password</p>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    name="password"
                    id="password"
                    className="py-3 bg-body-tertiary"
                    placeholder="Password"
                  />
                </Form.Group>

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
                  className="d-block w-100 py-3 border-0"
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
