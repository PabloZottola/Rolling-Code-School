import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CrearAlumnos from "../auth/pages/CrearAlumnos";

export const AppRouterCrearAlumnos = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/CrearAlumnos" element={<CrearAlumnos />} />
      </Routes>
    </BrowserRouter>
  );
};
