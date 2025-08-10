import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "white" }}>
      <Link to="/" style={{ color: "white", marginRight: "10px" }}>Home</Link>
      <Link to="/profile" style={{ color: "white", marginRight: "10px" }}>Profile</Link>
      <Link to="/settings" style={{ color: "white" }}>Settings</Link>
    </nav>
  );
};

export default Navbar;
