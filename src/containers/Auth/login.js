import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
// import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errrorMessage: '',
        }
    }

    handleOnChangeUserNameInput = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handleOnChangePasswordInput = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    handleLoginBtn = async () => {
        this.setState({
            errrorMessage: ''
        });

        try {
            let data = await handleLoginApi(this.state.username, this.state.password);
            // handle error
            if (data && data.errorCode !== 0) {
                this.setState({
                    errrorMessage: data.message
                })
            } else {
                this.props.userLoginSuccess(data.user);
                console.log('Login success');
            }
            console.log("data: ", data);
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errrorMessage: error.response.data.message
                    })
                }
            }
        }
    }

    handleClickShowPassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content">
                        <div className="col-12 login-title">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder='Enter your username'
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUserNameInput(event)}
                            />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password:</label>
                            <div className="login-input-password-show">
                                <input
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    className="form-control"
                                    placeholder='Enter your password'
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnChangePasswordInput(event)}
                                />
                                <span onClick={() => this.handleClickShowPassword()}>
                                    <i className={this.state.isShowPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-12" style={{ color: 'red' }}>
                            {this.state.errrorMessage}
                        </div>
                        <div className="col-12">
                            <button className='btn login-btn' onClick={() => this.handleLoginBtn()}>Login</button>
                        </div>
                        <div className="col-12">
                            <span className='login-forgot-pass-text'>Forgot your password?</span>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <span className='login-forgot-pass-text'>Or Login with</span>
                        </div>
                        <div className="col-12 login-social">
                            <i className="fab fa-google-plus-g google-icon"></i>
                            <i className="fab fa-facebook-f facebook-icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        // adminLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
