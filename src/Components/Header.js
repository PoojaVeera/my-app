import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="Header">
      <Link to="/" style={{ textDecoration: "none", color: "whitesmoke" }}>
        HOME
      </Link>
      <Link
        to="/AddUser"
        style={{ textDecoration: "none", color: "whitesmoke" }}
      >
        AddUser
      </Link>
      <Link
        to="/EditUser"
        style={{ textDecoration: "none", color: "whitesmoke" }}
      >
        EditUser
      </Link>
    </div>
  );
};
