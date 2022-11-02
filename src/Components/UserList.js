import React from "react";
import Card from "@mui/material/Card";
import EditIcon from "@mui/icons-material/Edit";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// import { v4 as uuid } from "uuid";
import { deleteUser } from "../UserSlice";
export const UserList = () => {
  const users = useSelector((store) => store.users.value);
  const dispatch = useDispatch();

  return (
    <div>
      <br></br>
      <h3>UserList</h3>
      {users.map((user) => {
        return (
          <div>
            <li
              style={{
                listStyleType: "none",
                // display: "grid",
                // gridTemplateColumns: " 200px 200px 200px",
                // gridTemplateRows: "50px 50px 50px",
              }}
            >
              <Card>
                Id: {user.id}
                <br /> Name: {user.name}
                <br /> Email: {user.mail}
                <Link
                  to={`EditUser/${user.id}`}
                  params={{ name: "pooja" }}
                  style={{ textDecoration: "none" }}
                >
                  <EditIcon />
                </Link>
                <button
                  onClick={() => {
                    dispatch(deleteUser({ id: user.id }));
                  }}
                >
                  <RemoveIcon />
                </button>
              </Card>
              <br></br>
            </li>
          </div>
        );
      })}
    </div>
  );
};
