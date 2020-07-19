import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
const Header = ({ currentUser, hidden }) => {
    const renderUser = () => {
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
                {renderUser()}
                <CartIcon />
            </div>
            {!hidden ? <CartDropdown /> : null}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
