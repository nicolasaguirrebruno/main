import { IonIcon } from "@ionic/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../hooks";
import { useWishesStore } from "../../../hooks/useWishesStore";

export const LikeButton = ({ product }) => {
  const { startAddingWishes, wishes, startDeletingWishes } = useWishesStore();

  const { status } = useAuthStore();

  const navigate = useNavigate();

  const { nombre, descripcion, caracteristicas, image, precio, categoria } =
    product;

  const handleCart = () => {
    if (status == "authenticated") {
      startAddingWishes({
        nombre,
        categoria,
        caracteristicas,
        descripcion,
        precio,
        image,
      });
    } else {
      navigate("/auth/login");
    }
  };

  const handleRemove = () => {
    startDeletingWishes({ id });
  };
  return (
    <div>
      {wishes.find((wish) => wish.id == product.id) ? (
        <IonIcon className="liked" onClick={handleRemove} name="heart" />
      ) : (
        <IonIcon onClick={handleCart} name="heart" />
      )}
    </div>
  );
};
