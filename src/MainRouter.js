import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './component/Navbar'

const MainRouter = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
            {/* <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/login" component={login} /> */}
            </Switch>
        </Router>
    )
}

export default MainRouter;