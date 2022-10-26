import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { CartPage } from "./pages/CartPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
