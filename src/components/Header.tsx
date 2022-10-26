import React from "react";
import { Link } from "react-router-dom";
import { SVGSelector } from "../utils/svgSelector";

import "../styles/Header.css";

export const Header = () => {
  return (
    <section className="header">
      <div className="header__name">
        <p className="header__name__p">QPICK</p>
      </div>
      <nav className="header__nav">
        <div className="header__nav__logo-1">
          <Link to="*">
            <SVGSelector id="heart" />
          </Link>
        </div>
        <div className="header__nav__logo-2">
          <Link to="/cart">
            <SVGSelector id="cart" />
          </Link>
        </div>
      </nav>
    </section>
  );
};
