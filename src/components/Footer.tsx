import React from "react";
import { SVGSelector } from "../utils/svgSelector";

import "../styles/Footer.css";

export const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__name">
        <p>QPICK</p>
      </div>
      <nav className="footer__nav">
        <p>Избранное</p>
        <p>Корзина</p>
        <p>Контакты</p>
      </nav>
      <div className="footer__langblok">
        <div>
          <p>Условия сервиса</p>
        </div>
        <div className="footer__langblok__lang">
          <SVGSelector id="world" />
          <span>Каз</span>
          <span>Рус</span>
          <span>Eng</span>
        </div>
      </div>
      <div className="footer__network">
        <div className="footer__network__fix-margin">
          <SVGSelector id="vk" />
        </div>
        <SVGSelector id="telegram" />
        <SVGSelector id="whatsapp" />
      </div>
    </section>
  );
};
