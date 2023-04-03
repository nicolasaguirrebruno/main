import React from "react";
import { ArrowFatRight, PlusCircle, TShirt, Users } from "phosphor-react";
import { Link } from "react-router-dom";
import { ProductList } from "../../chales/components/shop";
import { Products } from "../components";

export const AdminPage = () => {
  return (
    <div className="admin">
      <div className="admin__container">
        <header className="admin__header">
          <img
            src="/src/img/img/logo-color.png"
            alt=""
            className="admin__logo"
          />
          <h1 className="admin__heading">Panel de Administrador</h1>

          <a href="inicio" className="admin__header__link">
            <ArrowFatRight weight="thin" />
            Volver al inicio
          </a>
        </header>

        <div className="content">
          <nav className="sidebar">
            <ul className="side-nav">
              <li className="side-nav__item">
                <Link className="side-nav__link side-nav__active">
                  <TShirt className="side-nav__icon" weight="thin" />
                  <span>ver productos</span>
                </Link>
              </li>
              <li className="side-nav__item">
                <Link className="side-nav__link">
                  <Users className="side-nav__icon" weight="thin" />
                  <span>ver usuarios</span>
                </Link>
              </li>
              <li className="side-nav__item">
                <Link className="side-nav__link">
                  <PlusCircle className="side-nav__icon" weight="thin" />
                  <span>agregar producto</span>
                </Link>
              </li>
            </ul>
            <p className="legal">
              {" "}
              &copy; Nicolas Aguirre 2023 <br /> Todos los derechos reservados
            </p>
          </nav>
          <main className="chal-view">
            <Products />
          </main>
        </div>
      </div>
    </div>
  );
};
