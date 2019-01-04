import React, { Component } from 'react';
import './PasswordRecovery.scss';

class PasswordRecovery extends Component {

    constructor(props) {
        super(props);

        this.getForm = this.getForm.bind(this);
        this.onRequestRecovery = this.onRequestRecovery.bind(this);
        this.onSendNewPassword = this.onSendNewPassword.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);

        this.state = { 
            error: '', 
            isSend: false,
            email: ''
        };
    }

    getForm() {

        if(!this.state.isSend) {
            return (
                <form className='recoveryView__form' onSubmit={this.onRequestRecovery}>

                    <span>
                        <label>e-mail</label>
                        <input onChange={this.onEmailChange} type='email' name='email' />
                    </span>

                    <span>
                        <input type='submit' value='Отправить'/>
                    </span>

                </form>
            )
        } else {
            return (
                <form className='recoveryView__form' onSubmit={this.onSendNewPassword}>

                    <span>
                        <label>Код</label>
                        <input onChange={this.onRecoveryCodeChange} type='text' name='text' />
                    </span>

                    <span>
                        <label>Новый пароль</label>
                        <input onChange={this.onPasswordChange} type='password' name='password' />
                    </span>

                    <span>
                        <label>Подтверждение пароля</label>
                        <input onChange={this.onConfirmPasswordChange} type='password' name='confirmPassword' />
                    </span>

                    <span>
                        <input type='submit' value='Отправить'/>
                    </span>

                </form>
            )
        }
    }

    onRequestRecovery(e) {
        e.preventDefault();

        if(this.state.email == '') {
            this.setState({ error: 'Заполните поле e-mail' });
        } else {
            this.setState({ error: '' });

            // запрос на смену
            this.setState({ isSend: true });
        }
    }

    onSendNewPassword(e) {
        e.preventDefault();

        let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;

        let isNotEmptyField = this.state.password && this.state.confirmPassword;

        if(!isNotEmptyField) {
            this.setState({ error: 'Заполните все поля' });
        } else if(this.state.password != this.state.confirmPassword) {
            this.setState({ error: 'Пароли не совпадают' });
        } else if(!regexPassword.test(this.state.password)) {
            this.setState({ error: 'Пароль должен содержать как минимум 1 большую и 1 маленькую букву a-Z и 1 цифру и должен быть более 8 символов' });
        } else {
            // send & redirect
            this.setState({ error: '' });
        }
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
            <div className='recoveryView'>
                <span className='global-title'>Востановление пароля</span>

                <label className='recoveryView__errorMessage'>{this.state.error}</label>

                <this.getForm />

            </div>
        );
    }
}

export default PasswordRecovery;