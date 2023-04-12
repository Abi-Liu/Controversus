import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen bg-red-400 p-6">
      <ul className="flex">
        <h1 className="text-slate-50 mr-10 text-6xl">C</h1>
        <Link className="text-slate-50 mx-3 mt-3" to="/">
          Home
        </Link>
        <Link className="text-slate-50 mx-3 mt-3" to="/register">
          Register
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
