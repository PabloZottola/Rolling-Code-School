import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Home from "../home/Home";
import AboutUs from "../auth/pages/AboutUs";
import Contact from "../auth/pages/Contact";
import NotFoundPage from "../auth/pages/NotFoundPage";

function PublicRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default PublicRouter;
