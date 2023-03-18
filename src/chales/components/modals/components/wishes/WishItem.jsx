import React from "react";
import { useNavigate } from "react-router-dom";

export const WishItem = ({ wish }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(
      `/tienda/coleccion-${wish.categoria.toLowerCase()}/product/${
        wish.nombre
      }`
    );
  };

  return (
    <div onClick={handleClick} className="cart__item">
      <img src={wish.image[0]} alt="" className="cart__item--img" />
      <div className="cart__item--caracteristics">
        <h1 className="cart__item--heading">{wish.nombre}</h1>
        <p className="cart__item--category">{wish.categoria}</p>
      </div>

      <p className="cart__item--price">€{wish.precio}</p>
    </div>
  );
};
