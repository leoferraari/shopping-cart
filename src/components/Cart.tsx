import { useCart } from "../context/CartContext";
import ProductCart from "./ProductCart";
import { ShoppingCart } from "phosphor-react";

export default function Cart() {
  const { cart, total, clearCart } = useCart();

  return (
    <div className="m-[1rem]">
      {cart.length > 0 && 
        <div className="flex items-center justify-center gap-2 bg-gray-100 rounded-lg shadow-sm p-3 mb-4">
          <ShoppingCart size={22} className="text-gray-700" weight="bold" />
          <p className="text-gray-700 font-medium text-base">
            Seu Carrinho
          </p>
        </div>
      }
      
      <ul className="w-full mt-[1rem]">
        {cart.map((item) => (
          <ProductCart item={item}/>
        ))}
      </ul>

      {cart.length > 0 && (
        <>
          <div className="flex justify-between bg-gray-100 rounded-lg shadow-sm p-3 mb-4">
            <p className="text-gray-700 font-medium text-base">
              Total:
            </p>
            <p className="text-gray-700 font-medium text-base">
              R$ {total.toFixed(2)}
            </p>
          </div>
      
          <div className="bg-white rounded-lg shadow-sm">
            <button
              onClick={clearCart}
              className="w-full text-red-500 font-medium text-base border border-transparent rounded-lg py-3 hover:border-red-500 hover:text-white hover:bg-red-500 transition-colors"
            >
              Esvaziar carrinho
            </button>
          </div>
        </>
      )}
    </div>
  );
}
