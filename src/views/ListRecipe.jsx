import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import Navbar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import imageAvatar from "../assets/images/avatar.jpg";

import { useDispatch, useSelector } from "react-redux";

import { getMenuByUser, getMenu, deleteMenu } from "../redux/action/recipe";

const ListRecipe = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state);
  const delete_menu = useSelector((state) => state);
  // const { data, errorMessage, isLoading, isError } = menu.menu;

  const { data, isLoading } = useSelector((state) => state.menu_userReducer);
  console.log("ini data", data?.data.length);
  const handlerDelete = () => [];

  useEffect(() => {
    // dispatch(getMenu());
    dispatch(getMenuByUser());
  }, []);

  console.log(delete_menu);

  // date config
  const option = { month: "long", day: "2-digit" };

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
              <h6 className="mb-0">{localStorage?.getItem("name")}</h6>
              <p className="mb-0 text-start fw-bold">
                {data?.data.length} Recipes
              </p>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center text-end">
            <p className="mb-0">
              {new Date().toLocaleDateString("en-UK", option)}
            </p>
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
          {data?.data.map((item, index) => {
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
                            <span>{item.like_count} Likes</span> -{" "}
                            <span>{item.comment_count} Comment</span> -{" "}
                            <span>{item.saved_count} Bookmark</span>
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
