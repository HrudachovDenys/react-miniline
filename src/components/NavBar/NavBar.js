import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { logout } from '../../store/actions/Auth';
import { connect } from 'react-redux';

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.LoginOrProfileButtons = this.LoginOrProfileButtons.bind(this);
        this.logout = this.logout.bind(this);
    }

    // Основные клавиши меню 'Гланая', 'Добавить пост'
    MenuButtons() {
        return (
            <React.Fragment>
                <li className='navBar__li-menu'>
                    <Link to="/">
                        <img src="https://img.icons8.com/metro/20/ffffff/home.png" alt=""/>
                        Главная
                    </Link>
                </li>
                <li className='navBar__li-menu'>
                    <Link to="/add-post">
                        <img src="https://img.icons8.com/ios/20/ffffff/edit-file-filled.png" alt=""/>
                        Добавить пост
                    </Link>
                </li>
            </React.Fragment>
        )
    }

    // Клавиши 'Логин', 'Регистрация'
    LoginRegButtons() {
        return (
            <React.Fragment>
                <li className='navBar__li-auth'>
                    <Link to="/auth/reg">
                        <img src="https://img.icons8.com/ios-glyphs/20/ffffff/student-registration.png" alt=""/>
                        Регистрация
                    </Link>
                </li>
                <li className='navBar__li-auth'>
                    <Link to="/auth/login">
                        <img src="https://img.icons8.com/material/20/ffffff/login-rounded.png" alt=""/>
                        Логин
                    </Link>
                </li>
            </React.Fragment>
        )
    }

    //выход пользывателя
    logout() {
        this.props.logout();
    }

    // Клавиши 'Профиль', 'Выход'
    ProfileExitButtons() {
        return (
            <React.Fragment>
                <li className='navBar__li-auth'>
                    <a onClick={this.logout}>
                        <img src="https://img.icons8.com/ios/20/ffffff/exit-filled.png" alt="" />
                        Выход
                    </a>
                </li>
                <li className='navBar__li-auth'>
                    <Link to='/profile'>
                        <img src="https://img.icons8.com/android/20/ffffff/user.png" alt="" />
                        Профиль
                    </Link>
                </li>
            </React.Fragment>
        )
    }

    //Клавиши в зависимости от авторизации
    LoginOrProfileButtons() {
        if(this.props.isAuth) {
            return this.ProfileExitButtons();
        } else {
            return this.LoginRegButtons();
        }
    }

    render() {

        return (
            <ul className='navBar'>
                <this.MenuButtons />
                <this.LoginOrProfileButtons />
            </ul>
        )
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(NavBar);