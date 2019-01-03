import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = { isAuth: props.isAuth, profileID: props.profileID };

        this.LoginOrProfileButtons = this.LoginOrProfileButtons.bind(this);
        this.logout = this.logout.bind(this);
    }

    // Основные клавиши меню 'Гланая', 'Добавить пост'
    MenuButtons() {
        return (
            <React.Fragment>
                <li className='navBar__li-menu'>
                    <Link to="/">
                        <img src="https://img.icons8.com/metro/20/ffffff/home.png" />
                        Главная
                    </Link>
                </li>
                <li className='navBar__li-menu'>
                    <Link to="/add-post">
                        <img src="https://img.icons8.com/ios/20/ffffff/edit-file-filled.png" />
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
                        <img src="https://img.icons8.com/ios-glyphs/20/ffffff/student-registration.png" />
                        Регистрация
                    </Link>
                </li>
                <li className='navBar__li-auth'>
                    <Link to="/auth/login">
                        <img src="https://img.icons8.com/material/20/ffffff/login-rounded.png" />
                        Логин
                    </Link>
                </li>
            </React.Fragment>
        )
    }

    //выход пользывателя
    logout() {
        // Для теста
        this.setState({ isAuth: false });
    }

    // Клавиши 'Профиль', 'Выход'
    ProfileExitButtons() {
        return (
            <React.Fragment>
                <li className='navBar__li-auth'>
                    <a onClick={this.logout}>
                        <img src="https://img.icons8.com/ios/20/ffffff/exit-filled.png" />
                        Выход
                    </a>
                </li>
                <li className='navBar__li-auth'>
                    <Link to={ '/profile/' + this.state.profileID }>
                        <img src="https://img.icons8.com/android/20/ffffff/user.png" />
                        Профиль
                    </Link>
                </li>
            </React.Fragment>
        )
    }

    //Клавиши в зависимости от авторизации
    LoginOrProfileButtons() {
        if(this.state.isAuth) {
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

export default NavBar;