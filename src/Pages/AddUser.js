import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../UserSlice";

export const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const handleAdd = (event) => {
    dispatch(
      addUser({
        id: userList[userList.length - 1].id + 1,
        name,
        mail,
      })
    );
    console.log("data");
    navigate("/");
  };
  return (
    <div>
      <h2> Add details</h2>
      <label>Name:</label>&nbsp;&nbsp;
      <input
        type="text"
        value={name}
        required
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <br></br>
      <label>Email:</label>&nbsp;&nbsp;
      <input
        type="email"
        required
        onChange={(e) => {
          setMail(e.target.value);
        }}
      ></input>
      <br></br>
      <button onClick={handleAdd}>submit</button>
    </div>
  );
};
