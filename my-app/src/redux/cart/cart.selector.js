import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(selectCart, cart => cart.cartItems);

export const selectCartItemsCount = createSelector(selectCartItems, cartItems =>
    cartItems.reduce((prev, cur) => prev + cur.quantity, 0)
);
