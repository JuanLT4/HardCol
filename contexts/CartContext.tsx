"use client"

import React, { ReactNode, createContext, useContext, useReducer } from 'react';

// Define types for the cart item and cart context
interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  img: string; // Add img property
}

interface CartState {
  items: CartItem[];
}

interface CartAction {
  type: 'ADD_ITEM' | 'REMOVE_ITEM' | 'EMPTY_CART' | 'INCREASE' | 'DECREASE';
  payload?: CartItem;
}

// Initial state for the cart
const initialState: CartState = {
  items: [],
};

// Helper function to add item to cart
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM':
      // Check if item is already in the cart
      const existingItem = state.items.find(item => item.id === action.payload?.id);
      if (existingItem) {
        // Increase the quantity
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload?.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      // Item is new to the cart
      if (action.payload){
          return {
            ...state,
            items: [...state.items, { ...action.payload, quantity: 1 }],
          };
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload?.id),
      };
      case 'EMPTY_CART':
        return {
          ...state,
          items: [], // Clear the items array to empty the cart
        };
      default:
        return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
