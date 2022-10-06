import React from "react";
import "./App.css";
import { Layout } from "./Components/Layout";
import { Home } from "./Pages/Home";
import { Details } from "./Pages/Details";
import { Mock } from "./Pages/Mock";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout />
      <div className="Data">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Mock" element={<Mock />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
