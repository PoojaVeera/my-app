import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const EditUser = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    mail: "",
  });
  const handleEdit = () => {
    setValues({ name: "", mail: "" });
    navigate("/");
  };
  return (
    <div>
      <h2> Edit details</h2>
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
        type="email"
        value={values.mail}
        required
        onChange={(e) => setValues({ ...values, mail: e.target.value })}
      ></input>
      <br></br>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};
