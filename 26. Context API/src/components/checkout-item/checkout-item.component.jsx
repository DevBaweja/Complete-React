import React, { useContext } from 'react';
import { CartContext } from '../../providers/cart/cart.provider';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const { addItem, removeItem, clearItem } = useContext(CartContext);
    const { name, price, quantity, imageUrl } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>
                    &#10094;
                </div>
                <div className="value">{quantity}</div>
                <div className="arrow" onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className="price">${price}</span>
            <span className="total">${price * quantity}</span>

            <div className="clear-button" onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    );
};

export default CheckoutItem;
