import React from "react";
import { chales } from "../../../../data/data";
import { ChalCard } from "./ChalCard";

export const RecommendedList = () => {
  console.log(chales.length);
  return (
    <div className="chales">
      {chales.map((chal) => (
        <ChalCard key={chal.nombre} chal={chal} />
      ))}
    </div>
  );
};
