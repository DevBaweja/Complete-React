import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selector';

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

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
