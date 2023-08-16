import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useParams,
} from "react-router-dom";
import AuthChacker from "../components/AuthChacker/index.jsx";
import LandingPage from "../views/LandingPage.jsx";
import Login from "../views/Login.jsx";
import Register from "../views/Register.jsx";
import ListRecipe from "../views/ListRecipe.jsx";
import AddRecipe from "../views/AddRecipe.jsx";
import EditRecipe from "../views/EditRecipe.jsx";
import SearchRecipe from "../views/SearchRecipe.jsx";
import DetailRecipe from "../views/DetailRecipe.jsx";

const Router = () => {
  const { menuId } = useParams();
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
              {" "}
              <SearchRecipe />
            </AuthChacker>
          }
        />
        <Route
          path="/detail-recipe/:menuId"
          element={
            <AuthChacker>
              <DetailRecipe />
            </AuthChacker>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
