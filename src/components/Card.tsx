import React from "react";
import { SVGSelector } from "../utils/svgSelector";
import { Headphones } from "../models";

import "../styles/Card.css";

interface ProductProps {
  product: Headphones;
}

export const Card = (props: ProductProps) => {
  const setItem = () => {
    const rawCard = localStorage.getItem("cart");
    if (!rawCard) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    const cart = JSON.parse(localStorage.getItem("cart")!);
    const newCart = [...cart, props.product];
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <section className="card">
      <div className="card__img">
        <img src={props.product.img} alt="Наушник" />
      </div>
      <div className="card__container">
        <div className="card__container__blok-1">
          <div className="card__container__blok-1__name">
            <p>{props.product.title}</p>
          </div>
          <div className="card__container__blok_1__flex">
            <SVGSelector id="star"></SVGSelector>
            <span className="card__container__blok-1__flex__rating">
              {props.product.rate}
            </span>
          </div>
        </div>
        <div className="card__container__blok-2">
          <p className="card__container__blok-2__cost">
            {props.product.price + " ₽"}
          </p>
          <p onClick={setItem} className="card__container__blok-2__buy">
            Купить
          </p>
        </div>
      </div>
    </section>
  );
};
