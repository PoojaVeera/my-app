import React from "react";
import Card from "@mui/material/Card";
export const Home = () => {
  const users = [
    { id: 1, name: "abc", email: "abc@abc.com" },
    { id: 2, name: "cde", email: "cde@cde.com" },
  ];
  return (
    <div>
      <h2>home </h2>
      <label>Name:</label>&nbsp;&nbsp;
      <input type="text"></input>
      <br></br>
      <label>Email:</label>&nbsp;&nbsp;
      <input type="email"></input>
      <br></br>
      <button>Add user</button>
      <Card>
        {users.map((user) => (
          <div>
            Id: {user.id}&nbsp;&nbsp; Name: {user.name}&nbsp;&nbsp; Email:{" "}
            {user.email}
          </div>
        ))}
      </Card>
    </div>
  );
};
