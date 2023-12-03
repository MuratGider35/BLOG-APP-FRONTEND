import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default AppRouter;
