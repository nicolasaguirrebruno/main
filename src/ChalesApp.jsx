import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";

export const ChalesApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
