import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Admin.scss';

import Navigate from './Navigate/Navigate';
import Users from './Users/Users';

class Admin extends Component {

    render() {
        return (
            <div className='adminView'>

                <span className='global-title'>Admin panel</span>

                <Router>
                    <div class='admin'>
                        <Navigate className='admin__nav'/>

                        <Route exact path='/admin/users' component={ Users }/>
                    </div>
                </Router>

            </div>
        )
    }
}

export default Admin;