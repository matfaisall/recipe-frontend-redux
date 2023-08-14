import React, { useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";

import StyleAddRecipe from "./styles/AddRecipe.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postMenu } from "../redux/action/recipe";

const AddRecipe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [inputData, setInputData] = useState({
    title: "",
    ingredients: "",
    category_id: "1",
    image_url: "",
  });

  const postData = (event) => {
    event.preventDefault();
    let bodyFormData = new FormData();
    bodyFormData.append("title", inputData.title);
    bodyFormData.append("ingredients", inputData.ingredients);
    bodyFormData.append("category_id", inputData.category_id);
    bodyFormData.append("image", image);
    console.log(bodyFormData);

    dispatch(postMenu(bodyFormData, navigate));
  };

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    // console.log(inputData);
  };

  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
    // console.log(setImage(e.target.files[0]));
    e.target.files[0] &&
      setInputData({
        ...inputData,
        photo_url: URL.createObjectURL(e.target.files[0]),
      });
    console.log(e.target.files);
  };

  return (
    <>
      <Navbar />
      <main className="my-5">
        <Container>
          <Row>
            <Col md={8} className="mx-auto">
              <Form onSubmit={postData}>
                <Card className={`mb-4 ${StyleAddRecipe["image-card"]}`}>
                  {image && (
                    <img
                      src={inputData.image_url}
                      alt="image"
                      className="img-fluid w-100 d-block mx-auto upload-img"
                    />
                  )}

                  <div className="card-img-overlay">
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <input
                        type="file"
                        name="image"
                        onChange={onChangeImage}
                        id="formFile"
                        className="form-control bg-body-secondary w-50"
                      />
                    </div>
                  </div>
                </Card>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="title"
                    id="title"
                    value={inputData.title}
                    onChange={onChange}
                    className="py-3 bg-body-tertiary"
                    placeholder="Title"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    type="text"
                    name="ingredients"
                    id="ingredients"
                    value={inputData.ingredients}
                    onChange={onChange}
                    className="bg-body-tertiary"
                    placeholder="Ingredients"
                    rows={6}
                  />
                </Form.Group>
                <Row>
                  <Col md={4}>
                    <Form.Select className="py-3 bg-body-tertiary">
                      <option>Category</option>
                      <option value="1">Main Course</option>
                      <option value="2">Dessert</option>
                      <option value="3">Appetizer</option>
                    </Form.Select>
                  </Col>
                </Row>
                <div className="d-flex justify-content-center">
                  <Button
                    type="submit"
                    className="px-5 py-2 border-0"
                    style={{ backgroundColor: "#EFC81A" }}
                  >
                    Add Recipe
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default AddRecipe;
