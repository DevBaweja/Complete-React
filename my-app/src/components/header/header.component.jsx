import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

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

    const handle = () => {
        console.log('Done');
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

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden,
});
export default connect(mapStateToProps)(Header);
