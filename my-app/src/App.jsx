import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';

class App extends React.Component {
    unsubscribeFromAuth = null;
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(async snapshot => {
                    await this.props.setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data(),
                    });
                });
            } else {
                await this.props.setCurrentUser(userAuth);
            }
        });
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
        return (
            <div className="app">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/sign">
                        {this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />}
                    </Route>
                </Switch>
            </div>
        );
    }
}
const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
});
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
