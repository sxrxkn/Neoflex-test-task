import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import "../styles/CartPage.css";
import { CartElement } from "../components/CartElement";
import { Headphones } from "../models";

export const CartPage = () => {
  const setCount = () => {
    const rawCart = localStorage.getItem("cart");
    if (!rawCart) {
      return 0;
    }
    const cart = JSON.parse(rawCart);
    return cart.reduce(
      (sum: number, current: Headphones) => sum + +current.price,
      0
    );
  };

  const getData = () => {
    const rawCart = localStorage.getItem("cart");
    if (!rawCart) {
      return null;
    }
    const cart = JSON.parse(rawCart);
    return cart.map((product: Headphones, index: number) => {
      return <CartElement product={product} key={Math.random() * index} />;
    });
  };

  return (
    <>
      <div className="cart">
        <header>
          <Header />
        </header>
        <div className="cart-main-h1">
          <h1>Корзина</h1>
        </div>
        <main className="cart-main">
          <section className="cart-main__elements">{getData()}</section>
          <section className="cart-main__result">
            <div className="cart-main__result__string-1">
              <span>Итого</span>
              <span>{setCount() + " ₽"}</span>
            </div>
            <div className="cart-main__result__string-2">
              <span>Перейти к оформлению</span>
            </div>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
