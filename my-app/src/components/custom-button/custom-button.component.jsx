import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...other }) => {
    return (
        <button
            className={`custom-button 
            ${isGoogleSignIn ? 'google-sign-in' : ''} 
            ${inverted ? 'inverted' : ''}`}
            {...other}
        >
            {children}
        </button>
    );
};

export default CustomButton;
