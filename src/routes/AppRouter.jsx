import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../auth/pages/Register";
import Index from "../home/Home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/index" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};
