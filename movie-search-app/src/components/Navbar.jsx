import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <Link to="/" className="brand">MovieSearch</Link>
        <div className="links">
          <Link to="/">Home</Link>
        </div>
      </div>
    </nav>
  );
}
