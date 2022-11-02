// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import { editUser } from "../UserSlice";
// export const EditUser = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { pathname } = useLocation();
//   const userId = pathname.replace("/editUser/", "");
//   const user = useSelector((state) =>
//     state.users.find((user) => user.id === userId)
//   );
//   const [values, setValues] = useState({
//     name: "",
//     mail: "",
//   });
//   // const [name, setName] = useState(user.name);
//   // const [mail, setMail] = useState(user.mail);
//   const handleEdit = () => {
//     if (name && mail) {
//       dispatch(
//         editUser({
//           id: userId,
//           name,
//           mail,
//         })
//       );
//     }
//     navigate("/");
//   };
//   return (
//     <div>
//       <h2> Edit details</h2>
//       <label>Name:</label>&nbsp;&nbsp;
//       <input
//         type="text"
//         value={values.name}
//         required
//         onChange={(e) => setName(e.target.value)}
//       ></input>
//       <br></br>
//       <label>Email:</label>&nbsp;&nbsp;
//       <input
//         type="email"
//         value={values.mail}
//         required
//         onChange={(e) => setMail(e.target.value)}
//       ></input>
//       <br></br>
//       <button onClick={handleEdit}>Edit</button>
//     </div>
//   );
// };

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../UserSlice";

export const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((user) => user.id === params.id);
  const { name, mail } = existingUser[0];
  const [values, setValues] = useState({ name, mail });

  const handleEdit = (e) => {
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        mail: values.mail,
      })
    );
    console.log("data");
    navigate("/");
  };
  return (
    <div>
      <h2> Edit Details details</h2>
      <label>Name:</label>&nbsp;&nbsp;
      <input
        type="text"
        value={values.name}
        required
        onChange={(e) => {
          setValues({ ...values, name: e.target.value });
        }}
      ></input>
      <br></br>
      <label>Email:</label>&nbsp;&nbsp;
      <input
        type="email"
        value={values.mail}
        required
        onChange={(e) => {
          setValues({ ...values, mail: e.target.value });
        }}
      ></input>
      <br></br>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};
