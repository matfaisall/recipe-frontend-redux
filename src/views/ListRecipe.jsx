import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import imageAvatar from "../assets/images/avatar.jpg";

import { useDispatch, useSelector } from "react-redux";

import { getMenu, deleteMenu } from "../redux/action/recipe";

const ListRecipe = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state);
  const delete_menu = useSelector((state) => state);
  const { data, errorMessage, isLoading, isError } = menu.menu;
  // console.log(data);

  useEffect(() => {
    dispatch(getMenu());
  }, []);

  console.log(delete_menu);

  return (
    <>
      <Navbar />
      <Container>
        <div className="d-flex justify-content-between mt-4">
          <div className="d-flex align-items-center">
            <div className="border-start border-4 border-warning ">
              <div className="d-flex ms-2">
                <img
                  src={imageAvatar}
                  className="rounded-circle "
                  alt="profile"
                  style={{ width: 40 }}
                />
              </div>
            </div>
            <div className="d-flex flex-column ms-4">
              <h6 className="mb-0">Matfaisall</h6>
              <p className="mb-0 text-start fw-bold">10 Recipes</p>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center text-end">
            <p className="mb-0">August, 12</p>
          </div>
        </div>

        <div className="my-4">
          <Row>
            <Col>
              <div className="d-flex gap-2">
                <ul className="nav border-bottom border-2 border-warning">
                  <li className="nav-item">
                    <Link to="" className="nav-link active text-body-secondary">
                      Recipes
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="" className="nav-link  text-body-secondary">
                      Bookmarked
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="" className="nav-link  text-body-secondary">
                      Likes
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>

        <div className="my-4">
          {data?.map((item, index) => {
            return (
              <Row className="my-4" key={item.id}>
                <Col md={7}>
                  <Card className="mb-3 border-0" style={{ maxWidth: 620 }}>
                    <Row className="g-0">
                      <Col md={5}>
                        <img
                          src={item.image}
                          alt=""
                          className="img-fluid rounded d-flex align-items-center w-100"
                        />
                      </Col>
                      <Col md={7}>
                        <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <p className="mb-0">Ingredients</p>
                          <Card.Text>{item.ingredients}</Card.Text>
                          <Button
                            variant="warning"
                            className="btn-sm text-white"
                          >
                            <span>10 Likes</span> - <span>1 Comment</span> -{" "}
                            <span>3 Bookmark</span>
                          </Button>
                          <div className="mt-3">
                            <Link to={`/edit-recipe/${item.id}`}>
                              <Button className="btn btn-sm btn-primary me-3">
                                Edit Menu
                              </Button>
                            </Link>
                            <Button
                              className="btn btn-sm btn-danger"
                              onClick={() =>
                                dispatch(deleteMenu(item.id, navigate))
                              }
                            >
                              Delete
                            </Button>
                          </div>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default ListRecipe;
