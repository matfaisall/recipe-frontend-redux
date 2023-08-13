import React from "react";

import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md="4" className="mx-auto">
            <div className="text-center" style={{ color: "#EFC81A" }}>
              <h4 className="mb-3 fw-bold">Recipe...</h4>
              <h4 className="mb-3 fw-bold">Let's Get Started !</h4>
            </div>
            <p className="text-body-secondary text-center mb-4">
              Create new account to access all features
            </p>
            <hr />
            <Card className="border-0">
              <Form>
                <p className="mb-2">Name</p>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    id="name"
                    className="py-3 bg-body-tertiary"
                    placeholder="Name"
                  />
                </Form.Group>
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
                  className="d-block w-100 border-0 py-3"
                  style={{ backgroundColor: "#EFC81A" }}
                >
                  Submit
                </Button>
              </Form>
              <p className="mt-2">
                Already have account ?{" "}
                <Link
                  to="/auth/login"
                  style={{ textDecoration: "none", color: "#EFC81A" }}
                >
                  Login Here
                </Link>
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
