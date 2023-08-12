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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
