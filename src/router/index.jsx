import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import LandingPage from "../views/LandingPage.jsx";
import Login from "../views/Login.jsx";
import Register from "../views/Register.jsx";
import AddRecipe from "../views/AddRecipe.jsx";
import EditRecipe from "../views/EditRecipe.jsx";

const Router = () => {
  // const PrivateRoute = () => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     return <Outlet />;
  //   } else {
  //     alert("Anda harus login terlebih dahulu");
  //     return <Navigate to="/" />;
  //   }
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/edit-recipe" element={<EditRecipe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
