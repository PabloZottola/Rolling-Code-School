import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Register from "../auth/pages/Register";
import Admin from "../admin/pages/Admin";

function PrivateRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/admin" element={<Admin />} />
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
}

export default PrivateRouter;
