import React from "react";
import { Link } from "react-router-dom";
Link;

const Navbar = () => {
  return (
    <div className="text-center py-3 bg-warning">
      <h4>Ini Navigation Bar</h4>
      <Link to="/add-recipe">add menu</Link>
    </div>
  );
};

export default Navbar;
