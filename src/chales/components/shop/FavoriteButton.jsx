import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore, useFavoriteStore } from "../../../hooks";

export const FavoriteButton = ({ product }) => {
  const { startAdding, favorites, startDeleting } = useFavoriteStore();

  const { status } = useAuthStore();

  const navigate = useNavigate();

  const { id, nombre, image, precio, categoria } = product;

  const handleCart = () => {
    if (status == "authenticated") {
      startAdding({ id, nombre, categoria, precio, image });
    } else {
      navigate("/auth/login");
    }
  };

  const handleRemove = () => {
    startDeleting({ id });
  };
  return (
    <div>
      {" "}
      {favorites.find((favorite) => favorite.id == product.id) ? (
        <button className="product__button" onClick={handleRemove}>
          Eliminar del carrito
        </button>
      ) : (
        <button className="product__button" onClick={handleCart}>
          Agregar al carrito
        </button>
      )}
    </div>
  );
};
