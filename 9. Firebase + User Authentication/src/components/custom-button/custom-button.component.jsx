import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...other }) => {
    return (
        <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`} {...other}>
            {children}
        </button>
    );
};

export default CustomButton;
