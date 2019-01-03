import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.scss';
import Routes from './Routes'

import {
    Header,
    NavBar,
    Content
} from './components'

class App extends Component {

    render() {

        return (
            <Router>
                <div className="app">

                    <div className='app__header'>
                        <img className='header__img' src="https://img.icons8.com/ios/60/ffffff/skydrive-filled.png" />
                        <span className='header__name'>Miniline.net</span>
                    </div>

                    <div className="app__nav">
                        <NavBar isAuth={true} profileID={22123}/>
                    </div>

                    <div className="app__content">
                        <Routes />
                    </div>
                
                </div>
            </Router>
        );
    }
}

export default App;