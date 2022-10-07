import React, { useState } from "react";
import Card from "@mui/material/Card";
export const Home = () => {
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const users = [
    { id: 1, name: "abc", email: "abc@abc.com" },
    { id: 2, name: "cde", email: "cde@cde.com" },
  ];

  const handleAdd = (e) => {
    e.preventDefault();
    let len = users.length;
    let Id = len + 1;
    let a = name,
      b = mail;
    let newUsers = [...users];
    newUsers.push({ id: Id, name: a, mail: b });
    console.log(newUsers);
    alert("added");
    clearState();
  };
  const clearState = () => {
    setName("");
    setMail("");
    alert("cleared ");
  };

  return (
    <div>
      <h2>home </h2>
      <label>Name:</label>&nbsp;&nbsp;
      <input
        type="text"
        required
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br></br>
      <label>Email:</label>&nbsp;&nbsp;
      <input
        type="email"
        required
        onChange={(e) => setMail(e.target.value)}
      ></input>
      <br></br>
      <button type="submit" onClick={handleAdd}>
        Add user
      </button>
      {users.map((user) => {
        return (
          <div>
            <Card>
              Id: {user.id}
              <br /> Name: {user.name}
              <br /> Email: {user.email}
            </Card>
            <br></br>
          </div>
        );
      })}
    </div>
  );
};
