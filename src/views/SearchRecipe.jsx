import React, { useEffect, useState } from "react";

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

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchMenu } from "../redux/action/recipe";

// console.log(data);

import Navbar from "../components/NavigationBar";
import Footer from "../components/Footer";
import imageTest from "../assets/images/popular-recipe5.jpg";
import imageProfileTest from "../assets/images/avatar.jpg";

const SearchRecipe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menu = useSelector((state) => state.menu);
  // console.log("ini menu", menu);
  const { data, errorMessage, isLoading, isError } = menu;

  console.log("ini data", data?.data);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("ASC");
  // const [page, setPage] = useState(1);
  const [page, setPage] = useState(1);

  console.log("ini data", data?.pagination);

  const sortHandler = () => {
    const newSortOrder = sort === "ASC" ? "DESC" : "ASC";
    setSort(newSortOrder);
  };

  // console.log(sort);

  useEffect(() => {
    dispatch(searchMenu(search, sort, page));
  }, [search, sort, page]);

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
                    type="text"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
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
                onClick={sortHandler}
              >
                Sort By
              </Button>
              <Button
                variant="outline-warning"
                type="button"
                className="btn btn-sm px-3"
                disabled
              >
                Popular
              </Button>
              <Button
                variant="outline-warning"
                type="button"
                className="btn btn-sm px-3"
                disabled
              >
                Vegetarian
              </Button>
              <Button
                variant="outline-warning"
                type="button"
                className="btn btn-sm px-3"
                disabled
              >
                Breakfast
              </Button>
            </div>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          {data?.data?.map((item, index) => {
            return (
              <main key={item.id}>
                <Row className="text-center text-md-start">
                  <Col md="7">
                    <Card className="mb-3 border-0" style={{ maxWidth: 700 }}>
                      <Row className="g-0">
                        <Col md="5">
                          <img
                            src={item.image}
                            alt=""
                            className="img-fluid rounded"
                          />
                        </Col>
                        <Col md="7">
                          <Card className="border-0">
                            <h5 className="card-title mt-3 mt-md-0">
                              <Link
                                to={`/detail-recipe/${item.id}`}
                                className="text-black"
                                style={{ textDecoration: "none" }}
                              >
                                {item.title}
                              </Link>
                            </h5>
                            <p className="mb-0">Ingredients:</p>
                            <p className="card-text">{item.ingredients}</p>
                            <p
                              className="btn btn-sm me-auto text-white"
                              style={{ backgroundColor: "#EFC81A" }}
                            >
                              <span>{item.like_count} Likes</span> -{" "}
                              <span>{item.comment_count} Comment</span> -
                              <span> {item.saved_count} Bookmark</span>
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
                                <h6 className="mb-0">{item?.author}</h6>
                              </div>
                            </div>
                          </Card>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </main>
            );
          })}
        </Container>
      </section>
      <div className="py-5 d-flex justify-content-center align-items-center">
        <button
          className="btn px-4 text-white"
          style={{ backgroundColor: "#EFC81A" }}
          onClick={() => setPage(page - 1)}
          hidden={page <= 1}
        >
          Prev
        </button>
        <h5 className="mb-0 mx-4">
          Show {data?.pagination?.totalData} - {data?.pagination?.pageNow} From{" "}
          {data?.pagination?.totalPage}
        </h5>
        <button
          className="btn px-4 text-white"
          style={{ backgroundColor: "#EFC81A" }}
          onClick={() => setPage(page + 1)}
          hidden={
            page >=
            (data?.pagination == undefined ? 3 : data?.pagination.totalPage)
          }
        >
          Next
        </button>
      </div>
      <Footer />
    </>
  );
};

export default SearchRecipe;
