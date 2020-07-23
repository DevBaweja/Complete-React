import React, { createContext, useState, useEffect } from 'react';

import { addItemToCart, removeItemFromCart, clearItemFromCart, getCartItemsCount } from './cart.util';

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartItemsCount: 0,
});

const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const clearItem = item => setCartItems(clearItemFromCart(cartItems, item));
    const toggleHidden = () => setHidden(!hidden);
    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{ hidden, toggleHidden, cartItems, addItem, removeItem, clearItem, cartItemsCount }}
        >
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;
