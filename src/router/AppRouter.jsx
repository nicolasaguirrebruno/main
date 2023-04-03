import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AdminPage } from "../admin/pages";
import { LoginPage, RegisterPage } from "../auth";
import { ChalesRoutes } from "../chales/routes/ChalesRoutes";

import { useAuthStore } from "../hooks";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  const { checkAuthToken, status, user } = useAuthStore();

  let isAdmin = user?.uid === "6424af66bec7b421aa265e9f";

  useEffect(() => {
    isAdmin = user?.uid === "6424af66bec7b421aa265e9f";
  }, [status]);

  useEffect(() => {
    checkAuthToken();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/dashboard"
          element={isAdmin ? <AdminPage /> : <Navigate to="inicio" />}
        />
        <Route path="auth/register" element={<RegisterPage />} />
        <Route path="auth/login" element={<LoginPage />} />

        <Route path="*" element={<ChalesRoutes />} />
      </Routes>
    </>
  );
};
