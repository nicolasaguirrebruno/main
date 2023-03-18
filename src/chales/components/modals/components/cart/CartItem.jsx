import React from "react";
import { useNavigate } from "react-router-dom";

export const CartItem = ({ favorite }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(
      `/tienda/coleccion-${favorite.categoria.toLowerCase()}/product/${
        favorite.nombre
      }`
    );
  };

  return (
    <div onClick={handleClick} className="cart__item">
      <img src={favorite.image[0]} alt="" className="cart__item--img" />
      <div className="cart__item--caracteristics">
        <h1 className="cart__item--heading">{favorite.nombre}</h1>
        <p className="cart__item--category">{favorite.categoria}</p>
      </div>

      <p className="cart__item--price">€{favorite.precio}</p>
    </div>
  );
};
