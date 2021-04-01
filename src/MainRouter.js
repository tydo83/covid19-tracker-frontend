import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './component/Navbar'
import SignUp from './component/SignUp'
import Login from './component/Login'

const MainRouter = (props) => {
    return (
        <Router>
            <Navbar user={props.user} handleUserLogout={props.handleUserLogout} />
            <Switch>
                
                <Route exact path="/sign-up" component={SignUp} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </Router>
    )
}

export default MainRouter;