import React from "react";

import {
  Container,
  Row,
  Col,
  Nav,
  Form,
  FormGroup,
  Button,
  Card,
} from "react-bootstrap";

import imageTest from "../assets/images/popular-recipe5.jpg";
import imageProfileTest from "../assets/images/avatar.jpg";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

const SearchRecipe = () => {
  return (
    <>
      <Navbar />
      <section className="mt-4">
        <Container>
          <h1 className="text-start fw-bold mb-3">
            Discover Recipe <br />& Delicious Food
          </h1>
          <Row>
            <Col md="7">
              <Form className="mb-3">
                <FormGroup className="d-flex">
                  <Form.Control
                    className="fs-6 py-3"
                    size="lg"
                    type="search"
                    placeholder="Search Menu..."
                  />
                  <Button
                    className="px-5 ms-2 border-0"
                    style={{ backgroundColor: "#EFC81A" }}
                  >
                    Search
                  </Button>
                </FormGroup>
              </Form>
            </Col>
            <div className="d-flex gap-3">
              <Button
                type="button"
                className="btn btn-sm btn-warning px-3 text-white"
              >
                New
              </Button>
              <Button
                variant="outline-warning"
                type="button"
                className="btn btn-sm px-3"
              >
                Popular
              </Button>
              <Button
                variant="outline-warning"
                type="button"
                className="btn btn-sm px-3"
              >
                Vegetarian
              </Button>
              <Button
                variant="outline-warning"
                type="button"
                className="btn btn-sm px-3"
              >
                Breakfast
              </Button>
            </div>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <main>
            <Row className="text-center text-md-start">
              <Col md="7">
                <Card className="mb-3 border-0" style={{ maxWidth: 700 }}>
                  <Row className="g-0">
                    <Col md="5">
                      <img
                        src={imageTest}
                        alt=""
                        className="img-fluid rounded"
                      />
                    </Col>
                    <Col md="7">
                      <Card className="border-0">
                        <h5 className="card-title mt-3 mt-md-0">
                          <Link
                            to="/"
                            className="text-black"
                            style={{ textDecoration: "none" }}
                          >
                            American Shrimp Fried Fice
                          </Link>
                        </h5>
                        <p className="mb-0">Ingredients:</p>
                        <p className="card-text">
                          Chicken, Rice, Soy Sauce Garlic, Black Chili papper
                        </p>
                        <p
                          className="btn btn-sm me-auto text-white"
                          style={{ backgroundColor: "#EFC81A" }}
                        >
                          <span>10 Likes</span> - <span>12 Comment</span> -
                          <span> 3 Bookmark</span>
                        </p>

                        <div className="d-flex align-items-center">
                          <div>
                            <div className="d-flex">
                              <img
                                src={imageProfileTest}
                                alt="photo profile"
                                className="rounded-circle"
                                style={{ width: 40 }}
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column ms-2">
                            <h6 className="mb-0">matfaisall</h6>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </main>
        </Container>
      </section>
      <div className="py-5 d-flex justify-content-center align-items-center">
        <button
          className="btn px-4 text-white"
          style={{ backgroundColor: "#EFC81A" }}
        >
          Prev
        </button>
        <h5 className="mb-0 mx-4">Show 1 - 5 From 20</h5>
        <button
          className="btn px-4 text-white"
          style={{ backgroundColor: "#EFC81A" }}
        >
          Next
        </button>
      </div>
      <Footer />
    </>
  );
};

export default SearchRecipe;
