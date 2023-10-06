import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import Navbar from "../components/NavigationBar";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { getMenuDetail, updateMenu } from "../redux/action/recipe";

import StyleAddRecipe from "./styles/AddRecipe.module.css";

const EditRecipe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.detail_menuReducer);

  const { menuId } = useParams();
  const [image, setImage] = useState(null);

  console.log("ini data put", data?.data.title);

  // new data input
  const [inputData, setInputData] = useState({
    title: "",
    ingredients: "",
    category_id: "1",
    image_url: "",
  });

  useEffect(() => {
    dispatch(getMenuDetail(menuId));
  }, []);

  // console.log("ini data", data);
  // console.log("ini inputdata", inputData);

  useEffect(() => {
    data &&
      setInputData(
        {
          ...inputData,
          title: data?.data.title,
          image_url: data?.data.image,
          ingredients: data?.data.ingredients,
          category_id: data?.data.category_id,
        }
        // [data]
      );
  }, [data]);

  console.log("ini input data", inputData);

  const postData = (event) => {
    event.preventDefault();
    let bodyFormData = new FormData();
    bodyFormData.append("title", inputData.title);
    bodyFormData.append("ingredients", inputData.ingredients);
    bodyFormData.append("category_id", inputData.category_id);
    bodyFormData.append("image", image);

    console.log("ini body form", bodyFormData);
    dispatch(updateMenu(bodyFormData, menuId, navigate));
  };

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onChangePhoto = (e) => {
    setImage(e.target.files[0]);
    e.target.files[0] &&
      setInputData({
        ...inputData,
        image_url: URL.createObjectURL(e.target.files[0]),
      });
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
                      name="image"
                      src={inputData.image_url || data?.data.image_url}
                      alt="image"
                      className="img-fluid w-100 d-block mx-auto upload-img"
                    />
                  )}

                  <div className="card-img-overlay">
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <input
                        type="file"
                        name="image"
                        onChange={onChangePhoto}
                        id="formFile"
                        className="form-control bg-body-secondary w-50"
                      />
                    </div>
                  </div>
                </Card>
                <p className="text-danger" style={{ fontSize: 12 }}>
                  * <b>The image will be the same as it was before</b> if you do
                  not insert a new one.
                </p>

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
                    <Form.Select
                      className="py-3 bg-body-tertiary"
                      name="category_id"
                      onChange={onChange}
                      value={inputData.category_id}
                    >
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
                    Edit Recipe
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

export default EditRecipe;
