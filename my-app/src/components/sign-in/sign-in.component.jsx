import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
    };

    submitHandler = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    };

    changeHandler = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value,
        });
    };
    render() {
        return (
            <div className="sign-in">
                <h2 className="sign-in__title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.submitHandler}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        required
                        changeHandler={this.changeHandler}
                        label="Email"
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        required
                        changeHandler={this.changeHandler}
                        label="Password"
                    />

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
