import React, { useEffect } from "react";

import Navbar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import imageAvatar from "../assets/images/avatar.jpg";
import imageTest from "../assets/images/detail-menu1.jpg";
import "boxicons";
import { Link, useParams } from "react-router-dom";

import { getMenuDetail } from "../redux/action/recipe";
import { useDispatch, useSelector } from "react-redux";

const DetailRecipe = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { data, isLoading } = useSelector((state) => state.detail_menuReducer);
  console.log("ini data detail", data);
  console.log("isloading ini", isLoading);

  useEffect(() => {
    dispatch(getMenuDetail(id));
  }, []);

  // creating current date
  const currentDate = new Date();
  let month = currentDate.getMonth();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthName = months[month];
  let dayOfMonth = currentDate.getDate();

  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <div className="d-flex justify-content-between">
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
              <h6 className="mb-0">faisal</h6>
              <p className="mb-0 text-start fw-bold">3 Recipes</p>
            </div>
          </div>
          <div className="d-flex flex-column text-end">
            <p className="mb-0">{`${monthName}, ${dayOfMonth}`}</p>
            <p className="mb-0">
              {data?.data.like_count} Likes -
              <span> {data?.data.comment_count} Comments</span>
            </p>
          </div>
        </div>

        <main className="mt-5">
          <h1 className="title text-center mb-5">{data?.data.title}</h1>

          <Row className="mb-5">
            <Col md="8" className="mx-auto" style={{ maxWidth: 800 }}>
              <img
                src={data?.data.image}
                alt=""
                className="rounded d-block mx-auto"
              />
              {/* <img className="rounded" src="../assets/images/detail-menu1.jpg" alt=""> */}
            </Col>
          </Row>

          <div className="mb-5">
            <h4>Ingredients</h4>
            <ul>
              {data?.data.ingredients.split(",").map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>

          <div className="d-flex gap-3 mb-5">
            <div
              className="pt-2 px-2 rounded mb-0"
              style={{ backgroundColor: "#EFC81A" }}
            >
              <box-icon type="solid" name="like" color="white"></box-icon>
            </div>
            <div
              className="pt-2 px-2 rounded mb-0 border"
              style={{ borderColor: "#EFC81A" }}
            >
              <box-icon
                type="solid"
                name="bookmark-star"
                color="orange"
              ></box-icon>
            </div>
          </div>

          <Card
            className="py-5 border-start-0 border-end-0 border-3 mb-5"
            style={{ borderColor: "#EFC81A" }}
          >
            <div className="d-flex align-items-center mb-5">
              <div className="me-4">
                <div className="d-flex ms-2">
                  <img
                    src={imageAvatar}
                    className="rounded-circle "
                    alt="profile"
                    style={{ width: 40 }}
                  />
                </div>
              </div>
              <div className="d-flex flex-column border-end pe-4 border-4 border-warning">
                <h6 className="mb-0">
                  <Link
                    to="#"
                    className="text-black"
                    style={{ textDecoration: "none" }}
                  >
                    Super Joy Boy
                  </Link>
                </h6>
                <p className="mb-0 text-start fw-bold">20 Recipes</p>
              </div>
              <p className="message mb-0 ms-3">
                Wow, I just made this and it was delicious! thanks for sharing!
              </p>
            </div>

            <div className="d-flex align-items-center">
              <div className="me-4">
                <div className="d-flex ms-2">
                  <img
                    src={imageAvatar}
                    className="rounded-circle "
                    alt="profile"
                    style={{ width: 40 }}
                  />
                </div>
              </div>
              <div className="d-flex flex-column border-end pe-4 border-4 border-warning">
                <h6 className="mb-0">
                  <Link
                    to="#"
                    className="text-black"
                    style={{ textDecoration: "none" }}
                  >
                    Sun God Nika!
                  </Link>
                </h6>
                <p className="mb-0 text-start fw-bold">15 Recipes</p>
              </div>
              <p className="message mb-0 ms-3">So simple and delicious!</p>
            </div>
          </Card>

          <div className="mb-5">
            <Row>
              <Col md="6">
                <form action="">
                  <div className="mb-3">
                    <textarea
                      className="form-control bg-body-secondary"
                      id="comments"
                      rows="5"
                      placeholder="Your comment here!"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="btn py-3"
                    style={{
                      backgroundColor: "#FFB167",
                      color: "#FFF",
                      paddingLeft: 40,
                      paddingRight: 40,
                      border: "none",
                    }}
                  >
                    Send a comment
                  </Button>
                </form>
              </Col>
            </Row>
          </div>
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default DetailRecipe;
