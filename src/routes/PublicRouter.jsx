import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
//Import pages
import Home from "../home/Home";
import AboutUs from "../auth/pages/AboutUs";
import Contact from "../auth/pages/Contact";
//Function here
function PublicRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about-us" element={<AboutUs/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PublicRouter;
