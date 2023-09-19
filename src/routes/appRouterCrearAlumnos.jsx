import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../auth/pages/crearAlumnos";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/crearAlumnos" element={<crearAlumnos />} />
      </Routes>
    </BrowserRouter>
  );
};
