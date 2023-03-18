import { IonIcon } from "@ionic/react";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "animate.css";
import { useAuthStore } from "../hooks";
import { Links } from "./components/Links";
import "animate.css";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const activateNav = () => {
    if (window.scrollY > 40) setNav(true);
    else setNav(false);
  };

  const { status } = useAuthStore();

  const handleNavigate = () => {
    if (status == "not-authenticated") {
      navigate("/auth/login");
    } else {
      console.log("You are authenticated");
    }
  };

  window.addEventListener("scroll", activateNav);

  return (
    <nav
      className={
        nav
          ? "nav nav__visible animate__animated animate__fadeIn"
          : "nav nav__transparent "
      }
    >
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
        <Links component={"ShoppingCart"} icon={"cart-outline"} />
        <Links component={"Wish"} icon={"heart-outline"} />

        <a className="nav__anchors" onClick={handleNavigate}>
          <IonIcon
            className="nav__icons--container--element"
            name="person-outline"
          />
        </a>
      </div>
    </nav>
  );
};
