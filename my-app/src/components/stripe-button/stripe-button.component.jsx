import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price, ...other }) => {
    const priceInCent = price * 100;
    const publishableKey =
        'pk_test_51H0USfKSNBIy6IHqxlUzOfYy3lzU7PGxbZacNaSKVCh71x9GEYezclmo38KDSUfYWtpd59Obrnzs3jzxs6ZhX2Vu00BaQSXt8H';

    const onToken = token => {
        console.log(token);
    };
    return (
        <StripeCheckout
            label="Pay Now"
            name="Crwn Clothing"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceInCent}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
            {...other}
        />
    );
};

export default StripeCheckoutButton;
