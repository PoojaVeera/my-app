import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="Header">
      <Link to="/" style={{ textDecoration: "none", color: "whitesmoke" }}>
        HOME
      </Link>
      <Link
        to="/Details"
        style={{ textDecoration: "none", color: "whitesmoke" }}
      >
        Details
      </Link>
      <Link to="/Mock" style={{ textDecoration: "none", color: "whitesmoke" }}>
        Mock
      </Link>
    </div>
  );
};
