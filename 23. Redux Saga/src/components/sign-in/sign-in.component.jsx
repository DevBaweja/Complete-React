import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
    };

    submitHandler = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;
        emailSignInStart({ email, password });
    };

    changeHandler = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value,
        });
    };

    render() {
        const { googleSignInStart } = this.props;
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
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="button" isGoogleSignIn onClick={googleSignInStart}>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ googleSignInStart, emailSignInStart }, dispatch);

export default connect(null, mapDispatchToProps)(SignIn);
