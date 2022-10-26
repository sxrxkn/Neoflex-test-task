import React from "react";
import { SVGSelector } from "../utils/svgSelector";
import { Headphones } from "../models";

import "../styles/CartElement.css";

interface ProductProps {
  product: Headphones;
}

export const CartElement = (props: ProductProps) => {
  return (
    <section className="element">
      <div className="element__string-1">
        <div className="element__string-1__container">
          <div className="element__string-1__container__img">
            <img src={props.product.img} alt="Картинка" />
          </div>
          <div className="element__string-1__container__name">
            <p>{props.product.title}</p>
            <div className="element__string-1__container__cost">
              {props.product.price + " ₽"}
            </div>
          </div>
        </div>
        <div className="element__string-1__delete">
          <SVGSelector id="delete" />
        </div>
      </div>
      <div className="element__string-2">
        <div className="element__string-2__count">
          <SVGSelector id="minus" />
          <span>1</span>
          <SVGSelector id="plus" />
        </div>
        <div className="element__string-2__cost">
          <span>{props.product.price + " ₽"}</span>
        </div>
      </div>
    </section>
  );
};
