import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { useCart } from "./context/CartContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";

export default function App() {
  const { cart } = useCart();

  useEffect(() => {
    document.title = "Shopping Cart";
  }, []);

  return (
    <div className="flex flex-col bg-slate-300">
      <div className="bg-slate-400 min-h-[4rem] flex items-center justify-center ">
        <p>Adicione seus produtos ao carrinho!</p>
      </div>
  
      <div className="flex flex-col xl:flex-row flex-1">
        <div className="w-full xl:w-[25%] "></div>
        
        <div className="w-full xl:w-[50%] ">
          <ProductList />
        </div>
    
        <AnimatePresence>
          {cart.length > 0 && (
            <motion.div
              className="w-full xl:w-[25%] xl:pl-[1rem] xl:pr-[1rem] bg-slate-400 mt-4 xl:mt-0"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Cart />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
  
      <ToastContainer />
  </div>
  );
}
