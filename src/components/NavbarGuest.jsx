import React from "react";

import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

import { Container, Navbar, Nav } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import imageAvata from "../assets/images/avatar.jpg";

const NavbarGuest = () => {
  return (
    <Navbar expand="lg" data-bs-theme="light">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="d-flex flex-column flex-lg-row gap-2 gap-md-3 gap-lg-5 py-3">
            <Link
              to="/auth/register"
              className="link text-black fw-medium"
              style={{ textDecoration: "none" }}
            >
              Register
            </Link>
            <Nav>
              <Link
                to="/auth/login"
                className="link text-black fw-medium"
                style={{ textDecoration: "none" }}
              >
                Login
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarGuest;
