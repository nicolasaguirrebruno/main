import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { ProductList } from "../components/shop";

export const ShopRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="coleccion-vestir"
          element={<ProductList categoria="vestir" />}
        ></Route>
        <Route
          path="coleccion-mantas"
          element={<ProductList categoria="mantas" />}
        ></Route>
      </Routes>
    </>
  );
};
