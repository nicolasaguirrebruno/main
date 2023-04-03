import React from "react";
import { useNavigate } from "react-router-dom";
import { useFavoriteStore } from "../../../../../hooks";

export const CartItem = ({ favorite }) => {
  const navigate = useNavigate();

  const { startDeleting } = useFavoriteStore();

  const handleClick = () => {
    navigate(
      `/tienda/coleccion-${favorite.categoria.toLowerCase()}/product/${
        favorite.nombre
      }`
    );
  };
  const id = favorite.id;

  const handleRemove = () => {
    console.log(favorite);
    startDeleting({ id });
  };
  return (
    <div className="cart__item">
      <img
        onClick={handleClick}
        src={favorite.image[0]}
        alt=""
        className="cart__item--img"
      />
      <div className="cart__item--caracteristics">
        <h1 className="cart__item--heading">{favorite.nombre}</h1>
        <p className="cart__item--category">{favorite.categoria}</p>
        <a onClick={handleRemove} className="cart__item--eliminate">
          Eliminar Del Carrito
        </a>
      </div>

      <p className="cart__item--price">€{favorite.precio}</p>
    </div>
  );
};
