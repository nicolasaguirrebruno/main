import React from "react";
import { chales } from "../../../../data/data";
import { ChalCard } from "./ChalCard";

export const RecommendedList = () => {
  return (
    <div className="chales">
      {chales.map((chal) => (
        <ChalCard key={chal.nombre} chal={chal} />
      ))}
    </div>
  );
};
