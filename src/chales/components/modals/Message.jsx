import { Pencil, PlusCircle, XCircle } from "phosphor-react";
import React, { useEffect, useState } from "react";

import { useEditStore } from "../../../hooks";
import { Caracteristics } from "./components";

export const Message = ({ show }) => {
  const { stopEditing, product } = useEditStore();

  const [formValues, setformValues] = useState({
    chalName: "",
    chalCategory: "",
    chalCaracteristics: [],
    chalDescription: "",
    chalPrice: "",
  });

  const handleCategoryChange = ({ target }) => {
    const categoryValue = target.id === "vestir" ? "Vestir" : "Mantas";
    setformValues({
      ...formValues,
      chalCategory: categoryValue,
    });
  };

  const addCategory = () => {
    if (newCaracteristic != "") {
      setformValues({
        ...formValues,
        chalCaracteristics: [
          ...formValues.chalCaracteristics,
          newCaracteristic,
        ],
      });
    }
  };

  const onInputChange = ({ target }) => {
    setformValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const [newCaracteristic, setNewCaracteristic] = useState("");

  useEffect(() => {
    if (product) {
      setformValues({
        chalName: product.nombre,
        chalCategory: product.categoria,
        chalCaracteristics: product.caracteristicas,
        chalDescription: product.descripcion,
        chalPrice: product.precio,
      });
    }
  }, [product]);

  return (
    <div className={`${show ? "editmodal" : "productsIndividual__notDisplay"}`}>
      <div className="editContainer">
        <h2 className="heading__secondary">Editar Producto</h2>

        <form className="editform">
          <label className="editform__label" htmlFor="title">
            Nombre de producto
          </label>
          <input
            className="editform__input"
            type="text"
            placeholder="Poncho Azul"
            name="chalName"
            id="title"
            value={formValues.chalName}
            onChange={onInputChange}
          />

          <label className="editform__label">Categoria</label>
          <div className="editform__categories">
            <div className="editform__categories--category">
              <input
                className="editform__radio--input"
                type="radio"
                id="vestir"
                name="chalCategory"
                checked={formValues.chalCategory === "Vestir" ? true : false}
                onChange={handleCategoryChange}
              />

              <label className="editform__label label-radio" htmlFor="vestir">
                <span className="editform__radio-button"></span>
                Vestir
              </label>
            </div>

            <div className="editform__categories--category">
              <input
                className="editform__radio--input"
                type="radio"
                id="mantas"
                name="chalCategory"
                checked={formValues.chalCategory === "Mantas" ? true : false}
                onChange={handleCategoryChange}
              />
              <label className="editform__label label-radio" htmlFor="mantas">
                <span className="editform__radio-button"></span>
                Mantas
              </label>
            </div>
          </div>

          <div className="caracteristics--group">
            <label className="editform__label">Caracteristicas</label>
            {formValues.chalCaracteristics?.map((caracteristic, index) => (
              <Caracteristics
                key={index}
                i={index}
                caracteristic={caracteristic}
                setformValues={setformValues}
                formValues={formValues}
              />
            ))}
          </div>

          <label className="editform__label" htmlFor="new">
            Agregar una caracteristica
          </label>

          <div
            style={{ display: "flex", gap: "2rem", alignItems: "center" }}
            className="div"
          >
            <input
              className="editform__input"
              type="text"
              placeholder="Hecho en lana natural..."
              name="chalName"
              style={{ width: "93%" }}
              id="new"
              value={newCaracteristic}
              onChange={({ target }) => setNewCaracteristic(target.value)}
            />
            <PlusCircle
              onClick={addCategory}
              className="edit-icon"
              size={24}
              weight="fill"
            />
          </div>

          <label className="editform__label" htmlFor="description">
            Descripcion
          </label>

          <textarea
            className="editform__textarea"
            id="description"
            name="chalDescription"
            rows={10}
            style={{
              maxWidth: "100%",
              width: "100%",
              padding: "10px",
              fontFamily: "inherit",
            }}
            value={formValues.chalDescription}
            onChange={onInputChange}
          />

          <label className="editform__label" htmlFor="title">
            Precio del producto
          </label>
          <input
            className="editform__input"
            type="text"
            placeholder="€250"
            name="chalPrice"
            id="title"
            onChange={onInputChange}
            value={formValues.chalPrice}
          />
        </form>
      </div>
    </div>
  );
};
