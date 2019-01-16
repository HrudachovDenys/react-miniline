import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Routes from './Routes'
import { connect } from 'react-redux';
import { isAuth } from './store/actions/Auth';

import {
    NavBar
} from './components'

class App extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.authVerification();
    }

    render() {

        return (
            <Router>
                <div className="app">

                    <div className='app__header'>
                        <img className='header__img' src="https://img.icons8.com/ios/60/ffffff/skydrive-filled.png" alt="" />
                        <span className='header__name'>Miniline.net</span>
                    </div>

                    <div className="app__nav">
                        <NavBar isAuth={this.props.isAuth}/>
                    </div>

                    <div className="app__content">
                        <Routes isAuth={this.props.isAuth} regMessageSuccess={this.props.regMessageSuccess}/>
                    </div>

                    <div className="app__footer">
                        <p>All right reserved 2019 {}</p>
                    </div>
                
                </div>
            </Router>
        );
    }
}

const mapStateToProps = store => {
    return {
        isAuth: store.Login.isAuth,
        regMessageSuccess: store.Registration.successMessage
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        authVerification: () => dispatch(isAuth())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);