import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selector';

import CheckoutHeader from '../../components/checkout-header/checkout-header.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => {
    const renderCartItems = () => {
        return cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />);
    };

    const checkout = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

    return (
        <div className="checkout-page">
            <CheckoutHeader checkout={checkout}></CheckoutHeader>

            {renderCartItems()}

            <div className="total">
                <span>Total: ${total}</span>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
