import { CartItem, useCart } from "../context/CartContext";
import { toast } from 'react-toastify';

type ProductProps = {
  item: Omit<CartItem, "quantity">;
};

export default function Product({ item }: ProductProps) {
  const { addToCart, cart } = useCart();

    
const alreadyInCart = cart.some((cartItem) => cartItem.id === item.id);

    const notify = () => {
        toast.success("Produto adicionado ao carrinho!", {
            position: "bottom-right", 
            autoClose: 1000, 
            closeOnClick: true,
            pauseOnHover: true,
        });
    };

    const handleClickAddCart = (item: Omit<CartItem, "quantity">) => {
        addToCart(item);
        notify();
    };

  return (
    <div className="w-full flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="w-full md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1521334884684-d80222895322?w=400"
          alt={item.name}
          className="w-full h-48 md:h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-between p-4">
        <div>
          <p className="font-bold text-lg">{item.name}</p>
          <p className="text-sm italic text-gray-600">{item.category}</p>
          <p className="font-bold text-sm mt-2">R$: {item.price.toFixed(2)}</p>
        </div>

        <div className="flex justify-end mt-4 md:mt-6">
          <button
            onClick={() => handleClickAddCart(item)}
            disabled={alreadyInCart}
            className={`px-2 py-2 font-semibold rounded-lg transition 
                        ${alreadyInCart 
                        ? "bg-gray-400 cursor-not-allowed text-gray-200" 
                        : "bg-green-600 text-white hover:bg-green-700"}
                        `}
           >
            {alreadyInCart ? "No Carrinho" : "Adicionar"}
          </button>
        </div>
      </div>
    </div>
  );
}
