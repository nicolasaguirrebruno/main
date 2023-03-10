import React from "react";
import { RecommendedList } from "./subcomponents";

export const RecommendedProducts = () => {
  return (
    <section className="recommended">
      <h2 className="heading__secondary">Productos destacados</h2>
      <RecommendedList />
    </section>
  );
};
