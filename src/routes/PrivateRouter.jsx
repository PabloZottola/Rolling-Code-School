import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Admin from "../admin/pages/Admin";
import Home from "../home/Home";
import AboutUs from "../auth/pages/AboutUs";
import Contact from "../auth/pages/Contact";

function PrivateRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route exact path="/admin" element={<Admin />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default PrivateRouter;
