import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './component/Navbar'
import SignUp from './component/SignUp'
import Login from './component/Login'
import Home from './component/Home'
import NotFound from './component/NotFound'
import Search from './component/Search'
import PrivateRoute from './component/PrivateRoute'

const MainRouter = (props) => {
    console.log(props)
    return (
        <Router>
            <Navbar user={props.user} handleUserLogout={props.handleUserLogout} />
            <Switch>
                <PrivateRoute exact path="/search" component={Search}/>
                {/* <Route exact path="/home" 
                    component={Home}
                /> */}
                <Route exact path="/" render = {Home}/>
                <Route exact path="/sign-up" render={(routerProps) => <SignUp {...routerProps}
                    handleUserLogin={props.handleUserLogin} />} />
                <Route exact path="/login" render={(routerProps) => <Login {...routerProps}
                    handleUserLogin={props.handleUserLogin} />} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default MainRouter;