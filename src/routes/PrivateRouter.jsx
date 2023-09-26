import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "../auth/pages/Register";
import Admin from "../admin/pages/Admin";

function PrivateRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route
          exact
          path="/dashboard"
          element={
            sessionStorage.role === "client" ? (
              <DashboardComponent />
            ) : (
              <AdminDashboardComponent />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default PrivateRouter;
