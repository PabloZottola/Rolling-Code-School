import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import crearAlumnos from "../auth/pages/crearAlumnos";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/crearAlumnos" element={<crearAlumnos />} />
      </Routes>
    </BrowserRouter>
  );
};
