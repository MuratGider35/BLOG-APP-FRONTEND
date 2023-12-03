import React from "react";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import NewBlog from "../pages/NewBlog";

const AppRouter = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/newblog" element={<NewBlog />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default AppRouter;
