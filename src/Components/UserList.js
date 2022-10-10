import React from "react";
import Card from "@mui/material/Card";
import EditIcon from "@mui/icons-material/Edit";
import RemoveIcon from "@mui/icons-material/Remove";
export const UserList = () => {
  const users = [
    { id: 1, name: "abc", email: "abc@abc.com" },
    { id: 2, name: "cde", email: "cde@cde.com" },
  ];
  return (
    <div>
      <br></br>
      <h3>UserList</h3>
      {users.map((user) => {
        return (
          <div>
            <Card>
              Id: {user.id}
              <br /> Name: {user.name}
              <br /> Email: {user.email}
              <EditIcon />
              <RemoveIcon />
            </Card>
            <br></br>
          </div>
        );
      })}
    </div>
  );
};
