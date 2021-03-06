import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './component/Navbar'
import SignUp from './component/SignUp'
import Login from './component/Login'
import Home from './component/Home'
import NotFound from './component/NotFound'
import Search from './component/Search'
import PrivateRoute from './component/PrivateRoute'
import Features from './component/Features'
import Footer from './component/Footer'
import Profile from './component/Profile'

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
                <PrivateRoute exact path="/profile" component={Profile}/>
                <Route exact path="/" render = {(routerProps) => <Home {...routerProps} user={props.user}/>}/>
                <Route exact path="/sign-up" render={(routerProps) => <SignUp {...routerProps}
                    handleUserLogin={props.handleUserLogin} />} />
                <Route exact path="/login" render={(routerProps) => <Login {...routerProps}
                    handleUserLogin={props.handleUserLogin} />} />
                <Route component={NotFound} />
            </Switch>
            <Features />
            <Footer />
        </Router>
    )
}

export default MainRouter;