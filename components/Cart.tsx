"use client";

import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';

const Cart = () => {
  const { state, dispatch } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  // Calculate the total number of items in the cart
  const totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleEmptyCart = () => {
    dispatch({ type: 'EMPTY_CART' });
    setIsOpen(false); // Close the cart dropdown after emptying the cart
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-2 cursor-pointer relative" onClick={() => setIsOpen(!isOpen)}>
        <div className='flex flex-row relative w-[55px]'>
          <Image src="/cart.png" alt="cart" width={34} height={34} /> 
          <span className="text-sm bg-slate-700 absolute top-0 right-0 rounded-full z-10 px-2 text-white">{totalItems}</span>
        </div>
        <span className="text-sm font-medium bg-slate-700 text-white rounded-md p-2">${totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>

      </div>
      {isOpen && (
        <div className="absolute top-full right-0 bg-white rounded-lg shadow-md p-4 mt-2 w-64 max-h-60 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Carrito de compra</h2>
          {state.items.length > 0 ? (
            <>
              <ul>
                {state.items.map(item => (
                  <li key={item.id} className="flex items-center space-x-4 py-2">
                    <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded" />
                    <div className="flex flex-col">
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
                      <p className="text-sm text-gray-600">Precio: ${(item.price * item.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <button onClick={handleEmptyCart} className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                Vaciar carrito
              </button>
            </>
          ) : (
            <p className="text-sm text-gray-600">Tu carrito está vacío</p>
          )}
        </div>

      )}
    </div>
  );
};

export default Cart;
