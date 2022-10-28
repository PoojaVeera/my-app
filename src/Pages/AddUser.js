import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../UserSlice";
import { v4 as uuid } from "uuid";
export const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    mail: "",
  });

  const handleAdd = (e) => {
    setValues({ name: "", mail: "" });
    dispatch(
      addUser({
        id: uuid(),
        name: e.values.name,
        mail: e.values.mail,
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
        value={values.name}
        required
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      ></input>
      <br></br>
      <label>Email:</label>&nbsp;&nbsp;
      <input
        type="text"
        value={values.mail}
        required
        onChange={(e) => setValues({ ...values, mail: e.target.value })}
      ></input>
      <br></br>
      <button onClick={handleAdd}>submit</button>
    </div>
  );
};
