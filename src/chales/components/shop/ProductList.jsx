import React from "react";
import { chales } from "../../../data/data";
import { ChalCard } from "../chalesPage/subcomponents/ChalCard";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ categoria }) => {
  return (
    <article className="productList">
      <h1 className="productList__heading">
        Todos los productos de {categoria}
      </h1>
      <hr />

      <section className="chales">
        {chales.map(
          (product) =>
            product.categoria.toUpperCase() === categoria.toUpperCase() && (
              <ChalCard key={product.nombre} chal={product} />
            )
        )}
      </section>
    </article>
  );
};
