import React, { useState } from "react";

import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import register from "../redux/action/register";

import RecipeLogo from "../assets/images/mamarecipe-logo.png";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(form, navigate));
    console.log(form);
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md="4" className="mx-auto">
            <div className="text-center" style={{ color: "#EFC81A" }}>
              <div className="mb-2">
                <Link to="/">
                  <img
                    src={RecipeLogo}
                    alt="Logo Mama Recipe"
                    style={{ width: 80 }}
                  />
                </Link>
              </div>
              <h4 className="mb-3 fw-bold">Let's Get Started !</h4>
            </div>
            <p className="text-body-secondary text-center mb-4">
              Create new account to access all features
            </p>
            <hr />
            <Card className="border-0">
              <Form onSubmit={(e) => onSubmit(e)}>
                <p className="mb-2">Name</p>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
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
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    className="py-3 bg-body-tertiary"
                    placeholder="Password"
                    autoComplete="on"
                  />
                </Form.Group>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-chack-label"
                    htmlFor="flexCheckDefault"
                  >
                    I agree of term conditions
                  </label>
                </div>
                <Button
                  type="submit"
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
