import React from "react";
import HeroSection from "../components/sections/HeroSection";
import Dashboard from "../components/sections/Dashboard";

const HomePage = () => {
  const isLogged = window.localStorage.getItem("isLogged");
  return <>{!isLogged ? <HeroSection /> : <Dashboard />}</>;
};

export default HomePage;
