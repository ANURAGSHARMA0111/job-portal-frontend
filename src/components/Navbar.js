import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Job Portal With Resume Builder</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
       <Link to="/jobs">Jobs</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      
      </div>
    </nav>
  );
};

export default Navbar;
