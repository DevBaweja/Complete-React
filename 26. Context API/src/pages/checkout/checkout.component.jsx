import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItemsTotal } from '../../redux/cart/cart.selector';
import { CartContext } from '../../providers/cart/cart.provider';

import CheckoutHeader from '../../components/checkout-header/checkout-header.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({ total }) => {
    const { cartItems } = useContext(CartContext);
    const checkout = ['Product', 'Description', 'Quantity', 'Price', 'Total', 'Remove'];

    const renderCartItems = () => {
        return cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />);
    };

    const renderTotal = () => {
        if (cartItems.length) {
            return (
                <div className="sub-total">
                    <span>Sub Total: ${total}</span>
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

            <div className="test-warning">
                *Please use following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
            </div>
            <StripeCheckoutButton className="checkout-btn" price={total} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
