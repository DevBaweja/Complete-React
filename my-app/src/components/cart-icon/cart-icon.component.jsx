import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping.svg';
import './cart-icon.styles.scss';
const CartIcon = ({ click }) => {
    return (
        <div className="cart-icon" onClick={click}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};

export default CartIcon;
