import React from "react";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Produto A", price: 10 },
  { id: 2, name: "Produto B", price: 20 },
  { id: 3, name: "Produto C", price: 30 },
];

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - R$ {p.price.toFixed(2)}
            <button onClick={() => addToCart(p)}>Adicionar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
