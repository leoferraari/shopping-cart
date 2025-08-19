import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <div style={{ display: "flex", gap: "2rem" }}>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}
