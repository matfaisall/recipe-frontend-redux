import React from "react";
import notFound from "../assets/images/not-found.png";

const NotFound = () => {
  return (
    <div className="bg-white" style={{ height: "100vh", width: "100%" }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="d-flex flex-column align-items-center">
          <img
            src={notFound}
            alt="route not found"
            style={{ width: "200px" }}
          />
          <div className="my-4">
            <h2 className="text-danger">Page Not found !</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
