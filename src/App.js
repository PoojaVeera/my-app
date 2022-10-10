import React from "react";
import "./App.css";
import { Layout } from "./Components/Layout";
import { Home } from "./Pages/Home";
import { AddUser } from "./Pages/AddUser";
import { EditUser } from "./Pages/EditUser";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout />
      <div className="Data">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/EditUser/:id" element={<EditUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
