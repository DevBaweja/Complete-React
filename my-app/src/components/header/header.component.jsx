import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import CurrentUserContext from '../../contexts/current-user/current-user.context';
import CartContext from '../../contexts/cart/cart.context';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
const Header = () => {
    const [hidden, setHidden] = useState(true);
    const toggleHidden = () => setHidden(!hidden);

    const renderUser = currentUser => {
        if (currentUser) {
            return (
                <div className="option" onClick={() => auth.signOut()}>
                    Sign Out
                </div>
            );
        } else {
            return (
                <Link to="sign" className="option">
                    Sign In
                </Link>
            );
        }
    };

    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    Shop
                </Link>
                <Link to="/contact" className="option">
                    Contact
                </Link>
                <CurrentUserContext.Consumer>{renderUser}</CurrentUserContext.Consumer>
                <CartContext.Provider value={{ hidden, toggleHidden }}>
                    <CartIcon />
                </CartContext.Provider>
            </div>
            {!hidden ? <CartDropdown /> : null}
        </div>
    );
};

export default Header;
