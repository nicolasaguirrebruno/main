import React from "react";

export const Header = () => {
  return (
    <header className="headerAbout">
      <div className="headerAbout__container">
        <h2 className="headerAbout__title">
          La magia de las culturas ancestrales tejidas en un trabajo de arte
          proveniente de la Patagonia Argentina
        </h2>

        <img className="headerAbout__img" src="./public/oveja.jpg" alt="" />
      </div>
    </header>
  );
};
