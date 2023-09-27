import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../auth/pages/Register";
import CrearAlumnos from "../auth/pages/CrearAlumnos";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/crearAlumnos" element={<CrearAlumnos />} />
      </Routes>
    </BrowserRouter>
  );
};
