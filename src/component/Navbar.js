import React from "react";
import { NavLink, Link } from "react-router-dom";
import './css/style.css'

function Navbar(props) {
    return (
        <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
            <p className="h5 my-0 me-md-auto fw-normal">
                <Link style={{ textDecoration: "none" }} to={props.user ? "/search" : "/"}>
                    Covid19 Tracker
                </Link>
            </p>
            {props.user ? (
                <>
                    <NavLink
                        className="btn btn-outline-primary margin-right"
                        activeStyle={{ color: "yellow" }}
                        to='/profile'
                    >
                        {props.user.email}
                    </NavLink>
                    <Link
                        className="btn btn-outline-primary"
                        onClick={props.handleUserLogout}
                    >
                        logout
                    </Link>
                </>
            ) : (
                <>
                    <NavLink
                        className="btn btn-outline-primary margin-right"
                        activeStyle={{ color: "yellow" }}
                        to="/sign-up"
                    >
                        Sign up
                    </NavLink>
                    <NavLink
                        className="btn btn-outline-primary"
                        activeStyle={{ color: "yellow" }}
                        to="/login"
                    >
                        Login
                    </NavLink>
                </>
            )}
        </header>
    );
}
export default Navbar;