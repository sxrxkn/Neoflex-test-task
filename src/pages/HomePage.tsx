import React from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";
import { headphonesType1, headphonesType2 } from "../data/data";

import "../styles/HomePage.css";

export const HomePage = () => {
  return (
    <div className="home">
      <header>
        <Header />
      </header>
      <main className="home-main">
        <div className="home-main__h1">
          <h1>Наушники</h1>
        </div>
        <div className="home-main__showcase">
          {headphonesType1.map((product, index) => (
            <Card product={product} key={Math.random() * index} />
          ))}
        </div>
        <div className="home-main__h1">
          <h1>Беспроводные наушники</h1>
        </div>
        <div className="home-main__showcase">
          {headphonesType2.map((product, index) => (
            <Card product={product} key={Math.random() * index} />
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
