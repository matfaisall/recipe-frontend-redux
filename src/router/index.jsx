import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import LandingPage from "../views/LandingPage.jsx";

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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
