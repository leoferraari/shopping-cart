import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, total, clearCart } = useCart();

  return (
    <div>
      <h2>Carrinho</h2>
      {cart.length === 0 && <p>O carrinho está vazio</p>}
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - R$ {item.price.toFixed(2)} x
            <input
              type="number"
              value={item.quantity}
              min={1}
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value, 10))
              }
            />{" "}
            = R$ {(item.price * item.quantity).toFixed(2)}
            <button onClick={() => removeFromCart(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <>
          <h3>Total: R$ {total.toFixed(2)}</h3>
          <button onClick={clearCart}>Esvaziar carrinho</button>
        </>
      )}
    </div>
  );
}
