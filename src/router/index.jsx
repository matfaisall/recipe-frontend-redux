import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthChacker from "../components/AuthChacker/index.jsx";
import LandingPage from "../views/LandingPage.jsx";
import Login from "../views/Login.jsx";
import Register from "../views/Register.jsx";
import ListRecipe from "../views/ListRecipe.jsx";
import AddRecipe from "../views/AddRecipe.jsx";
import EditRecipe from "../views/EditRecipe.jsx";
import SearchRecipe from "../views/SearchRecipe.jsx";
import DetailRecipe from "../views/DetailRecipe.jsx";
import NotFound from "../views/NotFound.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

        <Route
          path="/list-recipe"
          element={
            <AuthChacker>
              <ListRecipe />
            </AuthChacker>
          }
        />

        <Route
          path="/add-recipe"
          element={
            <AuthChacker>
              <AddRecipe />
            </AuthChacker>
          }
        />

        <Route
          path="/edit-recipe/:menuId"
          element={
            <AuthChacker>
              <EditRecipe />
            </AuthChacker>
          }
        />
        <Route
          path="/search-recipe"
          element={
            <AuthChacker>
              <SearchRecipe />
            </AuthChacker>
          }
        />
        <Route
          path="/detail-recipe/:id"
          element={
            <AuthChacker>
              <DetailRecipe />
            </AuthChacker>
          }
        />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
