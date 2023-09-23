import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../auth/pages/Register";
import Login from "../auth/pages/Login";
import Home from "../home/Home";
import Admin from "../admin/pages/admin";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};
