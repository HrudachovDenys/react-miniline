import React from 'react';
import { Route } from 'react-router-dom';

import {
    Articles,
    Login,
    Registration,
    PasswordRecovery
} from './views'

export default () => {
    return (
        <React.Fragment>
            <Route exact path='/' component={ Articles }></Route>
            <Route exact path='/add-post' component={() => <h1>Add post</h1>}></Route>
            <Route exact path='/auth/login' component={ Login }></Route>
            <Route exact path='/auth/reg' component={ Registration }></Route>
            <Route exact path='/auth/recovery' component={ PasswordRecovery }></Route>
            <Route exact path='/profile/:id' component={() => <h1>Profile</h1>}></Route>
        </React.Fragment>
    )
}