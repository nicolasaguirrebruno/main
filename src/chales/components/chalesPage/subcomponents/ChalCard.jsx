import React, { useState } from "react";
import { Money, Tag } from "phosphor-react";
import { IonIcon } from "@ionic/react";
import { Rate } from "antd";

export const ChalCard = ({ chal }) => {
  const [rating, setRating] = useState(chal.rating);
  console.log(chal.image);
  return (
    <div className="chal">
      <img src={chal.image} alt="chal" className="chal__img" />
      <IonIcon className="chal__like" name="heart" />
      <h5 className="chal__name"> {chal.nombre}</h5>
      <div className="chal__category">
        <Tag className="icon" />
        <p>{chal.categoria}</p>
      </div>
      <div className="chal__price">
        <Money className="icon" />
        <p>€ {chal.precio}</p>
      </div>
      <div className="chal__rating">
        <div className="stars">
          <Rate
            className="stars__icon"
            defaultValue={rating}
            tooltips={["Malo", "Regular", "Bueno", "Muy Bueno", "Excelente"]}
            onChange={(value) => setRating(value)}
          />
        </div>

        <p>Rating: {rating}</p>
      </div>
      <button className="chal__button">
        <p className="chal__button__text"> Ver más</p>
      </button>
    </div>
  );
};
