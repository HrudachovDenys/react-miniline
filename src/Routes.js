import React from 'react'
import { Route } from 'react-router-dom'

export default () => {
    return (
        <React.Fragment>
            <Route exact path='/' component={() => <h1>Home</h1>}></Route>
            <Route exact path='/add-post' component={() => <h1>Add post</h1>}></Route>
            <Route exact path='/auth/login' component={() => <h1>Login</h1>}></Route>
            <Route exact path='/auth/reg' component={() => <h1>Registration</h1>}></Route>
            <Route exact path='/profile/:id' component={() => <h1>Profile</h1>}></Route>
        </React.Fragment>
    )
}