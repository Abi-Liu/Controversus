import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen bg-red-400 p-6">
      <Link className="text-slate-50 mx-3" to="/">
        Home
      </Link>
      <Link className="text-slate-50 mx-3" to="/login">
        Login
      </Link>
      <Link className="text-slate-50 mx-3" to="/register">
        Register
      </Link>
    </div>
  );
};

export default Navbar;
