import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Articles,
    Login,
    Registration,
    PasswordRecovery,
    Admin, 
    Message
} from './views'

class Routes extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                <Route exact path='/' component={ Articles }></Route>
                <Route exact path='/add-post' component={() => <h1>Add post</h1>}></Route>

                <Route exact path='/auth/login' 
                    render={() => this.props.isAuth ? <Redirect to='/' /> : <Login />}
                />

                <Route exact path='/auth/reg'
                    render={
                        () => this.props.isAuth ? 
                                <Redirect to='/' /> : 
                                this.props.regMessageSuccess ? 
                                    <Message message={this.props.regMessageSuccess}/> : 
                                    <Registration />}
                />
                <Route exact path='/auth/recovery' component={ PasswordRecovery }></Route>
                <Route exact path='/profile/:id' component={() => <h1>Profile</h1>}></Route>

                <Route path='/admin' component={ Admin }></Route>
            </React.Fragment>
        )
    }
}

export default Routes;