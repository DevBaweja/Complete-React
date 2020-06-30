import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
    const renderCartItem = () => {
        return cartItems.map(item => <CartItem key={item.id} item={item} />);
    };
    return (
        <div className="cart-dropdown">
            <div className="cart-items">{renderCartItem()}</div>
            <CustomButton>Go to checkout</CustomButton>
        </div>
    );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems,
});
export default connect(mapStateToProps)(CartDropdown);
