import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';
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
        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Password don't match");
            return;
        }
        signUpStart({ displayName, email, password });
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
                <span>Sign up and create an new account</span>
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
const mapDispatchToProps = dispatch => bindActionCreators({ signUpStart }, dispatch);

export default connect(null, mapDispatchToProps)(SignUp);
