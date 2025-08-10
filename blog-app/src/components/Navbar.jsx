import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const styles = {
    padding: "10px",
    background: "#333",
    color: "#fff",
    display: "flex",
    gap: "20px"
  };

  return (
    <nav style={styles}>
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
      <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link>
    </nav>
  );
}

export default Navbar;
