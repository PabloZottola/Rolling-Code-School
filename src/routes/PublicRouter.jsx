import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Home from "../home/Home";
import AboutUs from "../home/AboutUs";

function PublicRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about-us" element={<AboutUs/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PublicRouter;
