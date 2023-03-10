import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "../components/chalesPage";
import { Navbar } from "../components/Navbar";
import { ProductList } from "../components/shop";
import { AboutMe, ChalesPage, Shop } from "../pages";
import { ShopRoutes } from "./ShopRoutes";

export const ChalesRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="inicio" element={<ChalesPage />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="tienda" element={<Shop />} />

          <Route path="/*" element={<Navigate to="inicio" />} />
          <Route path="/tienda/*" element={<ShopRoutes />} />
        </Routes>
      </div>
    </>
  );
};
