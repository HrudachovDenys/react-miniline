import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Registration.scss';
import { registration } from '../../store/actions/Auth';

class Registration extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);

        this.state = {
            username: '',
            email: '', 
            password: '',
            confirmPassword: ''
        };
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.registrationAction(
            this.state.username,
            this.state.email,
            this.state.password,
            this.state.confirmPassword
        );
    }

    onUsernameChange(e) {
        this.setState({ username: e.target.value });
    }
    onEmailChange(e) {
        this.setState({ email: e.target.value });
    }
    onPasswordChange(e) {
        this.setState({ password: e.target.value });
    }
    onConfirmPasswordChange(e) {
        this.setState({ confirmPassword: e.target.value });
    }

    render() {
        return (
            <div className='registrationView'>

                <span className='global-title'>Регистрация</span>

                <label className='registrationView__errorMessage'>{this.props.error}</label>

                <form className='registrationView__form' onSubmit={this.onSubmit}>

                    <span>
                        <label>Имя пользывателя</label>
                        <input onChange={this.onUsernameChange} type='text' name='username' />
                    </span>

                    <span>
                        <label>e-mail</label>
                        <input onChange={this.onEmailChange} type='email' name='email' />
                    </span>

                    <span>
                        <label>Пароль</label>
                        <input onChange={this.onPasswordChange} type='password' name='password' />
                    </span>

                    <span>
                        <label>Подтверждение пароля</label>
                        <input onChange={this.onConfirmPasswordChange} type='password' name='confirmPassword' />
                    </span>

                    <span>
                        <input type='submit' value='Регистрация'/>
                    </span>

                </form>

            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        error: store.Registration.error
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        registrationAction: (username, email, password, confirmPassword) => 
            dispatch(registration(username, email, password, confirmPassword))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);