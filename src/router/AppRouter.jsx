import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../auth";
import { Footer } from "../chales/components/chalesPage";

import { AboutMe, ChalesPage, Shop } from "../chales/pages";
import { ChalesRoutes } from "../chales/routes/ChalesRoutes";

export const AppRouter = () => {
  const authStatus = "not-authenticated";

  return (
    <>
      <Routes>
        <Route path="auth/register" element={<RegisterPage />} />
        <Route path="auth/login" element={<LoginPage />} />
        <Route path="/*" element={<ChalesRoutes />} />

        {/* <Route path="/*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
};
