import React, { useEffect } from "react";
import { chales } from "../../../data/data";
import { ChalCard } from "../chalesPage/subcomponents/ChalCard";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ categoria, isInterest, interestPieces }) => {
  let number = 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  {
    categoria
      ? chales.forEach(
          (chal) =>
            chal.categoria.toUpperCase() == categoria.toUpperCase() && number++
        )
      : "";
  }

  const toMap = isInterest ? interestPieces : chales;

  return (
    <article className="productList">
      {isInterest ? (
        <section className="products">
          {toMap.map((product) => (
            <ProductCard key={product.nombre} product={product} />
          ))}
        </section>
      ) : (
        <>
          <h1 className="productList__heading">
            Todos los productos de {categoria}: ( {number} )
          </h1>
          <hr />

          <section className="products">
            {toMap.map(
              (product) =>
                product.categoria.toUpperCase() === categoria.toUpperCase() && (
                  <ProductCard key={product.nombre} product={product} />
                )
            )}
          </section>
        </>
      )}
    </article>
  );
};
