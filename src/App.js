import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/404";
import Navbar from "./components/Navbar";

function App() {
  const isLogged = window.localStorage.getItem("isLogged");
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {!isLogged && <Route path="/login" element={<Login />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
