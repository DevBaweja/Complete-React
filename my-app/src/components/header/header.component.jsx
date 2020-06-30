import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';
class Header extends React.Component {
    state = {
        isDropDown: false,
    };
    renderUser = () => {
        if (this.props.currentUser) {
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
    handleClick = () => {
        this.setState(state => ({
            isDropDown: !state.isDropDown,
        }));
    };
    render() {
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
                    {this.renderUser()}
                    <CartIcon click={this.handleClick} />
                </div>
                {this.state.isDropDown ? <CartDropdown /> : null}
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
});
export default connect(mapStateToProps)(Header);
