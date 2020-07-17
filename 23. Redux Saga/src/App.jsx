import React from 'react';
import { bindActionCreators } from 'redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';

import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

import './App.css';

class App extends React.Component {
    componentDidMount() {
        const { checkUserSession } = this.props;
        checkUserSession();
    }
    render() {
        return (
            <div className="app">
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route exact path="/checkout" component={CheckoutPage} />
                    <Route exact path="/sign">
                        {this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />}
                    </Route>
                </Switch>
            </div>
        );
    }
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => bindActionCreators({ checkUserSession }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(App);
