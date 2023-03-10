import { IonIcon } from "@ionic/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "animate.css";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const activateNav = () => {
    if (window.scrollY > 5) setNav(true);
    else setNav(false);
  };

  window.addEventListener("scroll", activateNav);

  return (
    <nav className="nav nav__invisible">
      <img src="./img/logo-blanco.png" className="nav__logo" alt="logo" />
      <div className="nav__anchors__container">
        <NavLink to="inicio" className="nav__anchors--link">
          Inicio
        </NavLink>
        <NavLink to="about" className="nav__anchors--link">
          Sobre Mi
        </NavLink>
        <NavLink to="tienda" className="nav__anchors--link">
          Tienda
        </NavLink>
      </div>
      <div className="nav__icons--container">
        <IonIcon
          className="nav__icons--container--element"
          name="search-outline"
        />
        <IonIcon
          className="nav__icons--container--element"
          name="person-outline"
        />
        <IonIcon
          className="nav__icons--container--element"
          name="heart-outline"
        />
        <IonIcon
          className="nav__icons--container--element"
          name="cart-outline"
        />
      </div>
    </nav>
  );
};
