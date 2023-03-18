import React from "react";
import { useNavigate } from "react-router-dom";
import { CartItem } from "./CartItem";

export const CartList = ({ favorites, isAllCart }) => {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/tienda/carrito");
  };

  let total = 0;
  let count = 0;
  return (
    <div>
      {favorites.map((favorite, index) => {
        if (index <= 2) {
          total += Number(favorite.precio);
          return <CartItem key={favorite.id} favorite={favorite} />;
        } else {
          total += Number(favorite.precio);
        }
      })}
      <p className="cart__remaining">
        {`${
          favorites.length > 3 && !isAllCart
            ? `Elementos restantes: ${favorites.length - 3}`
            : ""
        }`}
      </p>
      {isAllCart ? (
        ""
      ) : (
        <>
          <hr />
          <p className="subtotal">Total: €{total}</p>
          <button onClick={goToCart} className="cart__button">
            Ver todo el carrito
          </button>
        </>
      )}
    </div>
  );
};
