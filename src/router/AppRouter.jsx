import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { Footer } from "../chales/components/chalesPage";

import { Navbar } from "../chales/components/Navbar";
import { AboutMe, ChalesPage, Shop } from "../chales/pages";
import { ChalesRoutes } from "../chales/routes/ChalesRoutes";

export const AppRouter = () => {
  const authStatus = "not-authenticated";

  return (
    <>
      <Navbar />;
      <Routes>
        <Route path="/*" element={<ChalesRoutes />} />

        {/* <Route path="/*" element={<Navigate to="/" />} /> */}
      </Routes>
      <Footer />
    </>
  );
};
