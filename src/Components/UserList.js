import React from "react";
import Card from "@mui/material/Card";
import EditIcon from "@mui/icons-material/Edit";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const UserList = () => {
  const users = useSelector((store) => store.users);

  return (
    <div>
      <br></br>
      <h3>UserList</h3>
      {users.map((user) => {
        return (
          <div>
            <li style={{ listStyleType: "none" }}>
              <Card>
                Id: {user.id}
                <br /> Name: {user.name}
                <br /> Email: {user.email}
                <Link
                  to={`EditUser/${user.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <EditIcon />
                </Link>
                <RemoveIcon />
              </Card>
              <br></br>
            </li>
          </div>
        );
      })}
    </div>
  );
};
