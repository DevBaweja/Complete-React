import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    submitHandler = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Password don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({ displayName: '', email: '', password: '', confirmPassword: '' });
        } catch (err) {
            console.log('Error : Creating User', err.message);
        }
    };

    changeHandler = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="sign-up__title">I don't have a account yet!</h2>
                <span>Sign up and create a new account</span>
                <form className="sign-up-form" onSubmit={this.submitHandler}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.changeHandler}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.changeHandler}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.changeHandler}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.changeHandler}
                        label="Confirm Password"
                        required
                    />

                    <CustomButton type="submit"> Sign Up </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
