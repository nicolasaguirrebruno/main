import { Pencil, Trash } from "phosphor-react";
import React, { useState } from "react";
import { Message } from "../../chales/components/modals/Message";
import { useEditStore } from "../../hooks";

export const ProductsInfo = ({ product }) => {
  const [hover, setHover] = useState(false);
  const { startEditing, stopEditing } = useEditStore();

  const handleMouseEnter = () => {
    setHover(true);
    startEditing();
  };

  const handleMouseLeave = () => {
    setHover(false);
    stopEditing();
  };
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`productsIndividual `}
    >
      <div
        className={`${
          hover ? "productsIndividual__hover" : "productsIndividual__notDisplay"
        }`}
      ></div>
      <div
        className={`${
          hover
            ? "productsIndividual__options"
            : "productsIndividual__notDisplay"
        }`}
      >
        <Pencil
          onClick={() => startEditing(product)}
          className="edit-icon"
          size={24}
          weight="fill"
        />
        <Trash className="delete-icon" size={24} weight="fill" />
      </div>
      <img src={product.image[0]} />
      <h3 className="productsIndividual__title">{product.nombre}</h3>
      <div className="productsIndividual__container">
        <p>{product.categoria}</p>
        <p>€{product.precio}</p>
      </div>
    </div>
  );
};
