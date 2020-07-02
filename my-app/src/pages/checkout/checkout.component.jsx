import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selector';

import CheckoutHeader from '../../components/checkout-header/checkout-header.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => {
    const checkout = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

    const renderCartItems = () => {
        return cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />);
    };

    const renderTotal = () => {
        if (cartItems.length) {
            return (
                <div className="total">
                    <span>Total: ${total}</span>
                </div>
            );
        } else {
            return (
                <div className="">
                    <span>Your checkout is empty</span>
                </div>
            );
        }
    };

    return (
        <div className="checkout-page">
            <CheckoutHeader checkout={checkout}></CheckoutHeader>

            {renderCartItems()}

            {renderTotal()}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
