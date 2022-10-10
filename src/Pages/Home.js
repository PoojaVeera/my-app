import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Buttons } from "../Components/Buttons";
import { UserList } from "../Components/UserList";
export const Home = (users) => {
  // const handleAdd = (e) => {
  //   e.preventDefault();
  //   let len = users.length;
  //   let Id = len + 1;
  //   let a = name,
  //     b = mail;
  //   let newUsers = [...users];
  //   newUsers.push({ id: Id, name: a, mail: b });
  //   console.log(newUsers);
  //   alert("added");
  //   clearState();
  // };
  // const clearState = () => {
  //   setName("");
  //   setMail("");
  //   alert("cleared ");
  // };

  return (
    <div>
      <Link to="/Details">
        <Buttons />
      </Link>

      <UserList />
    </div>
  );
};
