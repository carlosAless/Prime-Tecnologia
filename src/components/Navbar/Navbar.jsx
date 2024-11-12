import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import SupportModal from "../SupportModal/SupportModal"; // Importe o modal


const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [openSupport, setOpenSupport] = useState(false);

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo"></img>
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Sobre nós
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Área de atuação
        </li>
        <li
          onClick={() => {
            setMenu("mobile-app");
            setOpenSupport(true); // Define openSupport como true para abrir o modal
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Suporte
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Feedback
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contato
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-seach-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
      </div>

      {openSupport && <SupportModal onClose={() => setOpenSupport(false)} />}

    </div>
  );
};

export default Navbar;
