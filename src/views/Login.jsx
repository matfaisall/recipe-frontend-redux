import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Swal from "sweetalert2";

import { login } from "../redux/action/login";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);

    const handleSuccess = (data) => {
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("id", data.data.id);
      // console.log("data Login: ", data.data.token);
      // console.log("data Login id: ", data.data.id);
    };

    if (form.email === "" || form.password === "") {
      alert("form harus diisi");
      // bisa di costom ulang
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Success",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(login(form, handleSuccess));
      navigate("/");
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md="4" className="mx-auto">
            <div className="text-center" style={{ color: "#EFC81A" }}>
              <h4 className="mb-3 fw-bold">Recipe...</h4>
              <h4 className="mb-3 fw-bold">Welcome</h4>
            </div>
            <p className="text-body-secondary text-center mb-4">
              Log in into your existing account
            </p>
            <hr />
            <Card className="border-0">
              <Form onSubmit={(e) => onSubmit(e)}>
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
