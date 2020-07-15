import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
    };

    submitHandler = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (err) {
            console.log('Error: Logging in User', err);
        }
    };

    changeHandler = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value,
        });
    };

    render() {
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2 className="sign-in__title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.submitHandler}>
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        required
                        changeHandler={this.changeHandler}
                        label="Email"
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        required
                        changeHandler={this.changeHandler}
                        label="Password"
                    />

                    <div className="sign-in__buttons">
                        <CustomButton>Sign in</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
