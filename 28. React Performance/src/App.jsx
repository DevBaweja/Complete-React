import React, { useEffect, lazy, Suspense } from 'react';
import { bindActionCreators } from 'redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import './App.css';

const HomePage = lazy(() => import('./pages/home/home.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ currentUser, checkUserSession }) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div className="app">
            <Header />
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/shop" component={ShopPage} />
                        <Route exact path="/checkout" component={CheckoutPage} />
                        <Route exact path="/sign">
                            {currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />}
                        </Route>
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => bindActionCreators({ checkUserSession }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
