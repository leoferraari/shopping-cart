import { MinusCircle, PlusCircle, Trash } from "phosphor-react";
import { CartItem, useCart } from "../context/CartContext";

type ProductProps = {
    item: CartItem
};

export default function ProductCart({ item }: ProductProps) {
    const { updateQuantity, removeFromCart, addToCart} = useCart();

    return (
        <li
            key={item.id}
            className="mb-4 w-full bg-slate-300 rounded-xl shadow-sm p-4 grid grid-cols-[80px_1fr_auto_auto] gap-4 items-center hover:shadow-md transition-shadow"
        >

            <div className="w-20 h-20 overflow-hidden rounded-lg border">
                <img
                src="https://images.unsplash.com/photo-1521334884684-d80222895322?w=400"
                alt={item.name}
                className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col">
                <p className="font-semibold text-gray-800 truncate ">{item.name}</p>
                <p className="text-sm text-gray-500">
                R$: {(item.price * item.quantity).toFixed(2)}
                </p>
            </div>

            <div className="flex flex-col items-center">
                <PlusCircle
                size={22}
                className="cursor-pointer text-green-600 hover:text-green-700 hover:scale-110 transition-transform duration-200"
                onClick={() => addToCart(item)}
                />
                <p className="text-sm font-medium">{item.quantity}</p>
                <MinusCircle
                size={22}
                className="cursor-pointer text-red-500 hover:text-red-600 hover:scale-110 transition-transform duration-200"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                />
            </div>

            <div className="flex justify-center">
                <Trash
                size={22}
                className="cursor-pointer text-gray-400 hover:text-red-500 hover:scale-110 transition-transform duration-200"
                onClick={() => removeFromCart(item.id)}
                />
            </div>
        </li>   
    );
}