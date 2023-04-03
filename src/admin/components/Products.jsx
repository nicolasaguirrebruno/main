import React from "react";
import { Message } from "../../chales/components/modals/Message";
import { ProductCard } from "../../chales/components/shop";
import { chales } from "../../data/data";
import { useEditStore } from "../../hooks";
import { ProductsInfo } from "./ProductsInfo";

export const Products = () => {
  const { startEditing, stopEditing, showEdit } = useEditStore();

  return (
    <div className="productsView">
      <h1 className="productsView__heading">Todos los productos</h1>

      <div className="productContainer">
        {chales.map((product) => (
          <ProductsInfo product={product} />
        ))}
      </div>

      <Message show={showEdit} />
    </div>
  );
};
