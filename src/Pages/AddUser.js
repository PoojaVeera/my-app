import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../UserSlice";
import { v4 as uuid } from "uuid";
export const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const handleName = (e) => setName(e.target.value);
  const handleMail = (e) => setMail(e.target.value);

  const handleAdd = (e) => {
    dispatch(
      addUser({
        id: uuid(),
        name,
        mail,
      })
    );
    navigate("/");
  };
  return (
    <div>
      <h2> Add details</h2>
      <label>Name:</label>&nbsp;&nbsp;
      <input
        type="text"
        // value={values.name}
        required
        onChange={handleName}
      ></input>
      <br></br>
      <label>Email:</label>&nbsp;&nbsp;
      <input type="email" required onChange={handleMail}></input>
      <br></br>
      <button onClick={handleAdd}>submit</button>
    </div>
  );
};
