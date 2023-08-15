import React from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

import { Container, Navbar, Nav } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import imageAvata from "../assets/images/avatar.jpg";

const NavigationBar = () => {
  const navigate = useNavigate();
  const token = localStorage?.getItem("token");
  const decode = jwt_decode(token);

  const handleLogout = () => {
    localStorage.clear();
    // navigate("/");
    Navigate("/");
  };

  return (
    <>
      <Navbar expand="lg" data-bs-theme="light">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="d-flex flex-column flex-lg-row gap-2 gap-md-3 gap-lg-5 py-3">
              <Link
                to="/"
                className="link text-black fw-medium"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
              <Nav>
                <Link
                  to="/add-recipe"
                  className="link text-black fw-medium"
                  style={{ textDecoration: "none" }}
                >
                  Add Menu
                </Link>
              </Nav>
              <Nav>
                <Link
                  to="/search-recipe"
                  className="link text-black fw-medium"
                  style={{ textDecoration: "none" }}
                >
                  Search Menu
                </Link>
              </Nav>
            </Nav>
            <div className="ms-auto">
              <div className="d-flex align-content-center">
                <div className="border-start border-3 border-warning">
                  <div className="d-flex ms-2">
                    <img
                      src={imageAvata}
                      alt=""
                      className="rounded-circle"
                      style={{ width: 40 }}
                    />
                  </div>
                </div>
                <div className="d-flex flex-column ms-4">
                  <h6 className="mb-0">
                    <Link
                      to="/list-recipe"
                      className="text-black"
                      style={{ textDecoration: "none" }}
                    >
                      {localStorage.getItem("name")}
                    </Link>
                  </h6>
                  <p className="mb-0 text-start">
                    <Link
                      className="fw-bold text-black"
                      style={{ textDecoration: "none" }}
                      onClick={() => handleLogout()}
                    >
                      Logout
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
