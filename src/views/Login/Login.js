import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Login.scss';
import { login, isAuth } from '../../store/actions/Auth';

class Login extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onRememberChange = this.onRememberChange.bind(this);

        this.state = {
            username: '', 
            password: '', 
            isRemember: false
        };
    }

    //Обработка отправки формы
    onSubmit(e) {
        e.preventDefault();

        this.props.loginAction(this.state.username, this.state.password).then(() => this.props.isAuth());
    }

    onUsernameChange(e) {
        this.setState({ username: e.target.value });
    }
    onPasswordChange(e) {
        this.setState({ password: e.target.value });
    }
    onRememberChange(e) {
        this.setState({ isRemember: e.target.checked });
    }

    render() {
        return (
            <div className='loginView'>

                <span className='global-title'>Авторизация</span>

                <label className='loginView__errorMessage'>{this.props.error}</label>

                <form className='loginView__form' onSubmit={this.onSubmit}>

                    <span>
                        <label>Имя пользывателя</label>
                        <input onChange={this.onUsernameChange} type='text' name='username' />
                    </span>

                    <span>
                        <label>Пароль</label>
                        <input onChange={this.onPasswordChange} type='password' name='password' />
                    </span>

                    <span>
                        <input type='submit' value='Войти'/>
                        <label className='form__label-checkbox'>
                            <input onChange={this.onRememberChange}  type='checkbox' name='isRemember' />
                            Запомнить меня?
                        </label>
                    </span>

                    <span>
                        <Link className='form__recovery' to='/auth/recovery'>Забыл пароль?</Link>
                    </span>

                </form>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        error: store.Login.error
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        loginAction: (username, password) => dispatch(login(username, password)),
        isAuth: () => dispatch(isAuth())
    }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Login);