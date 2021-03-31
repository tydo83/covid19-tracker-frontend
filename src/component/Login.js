import React, { Component } from 'react'

export class Login extends Component {
    render() {
        const { email, password } = this.state
        return (
            <div className="form-body">
                <main className="form-signin">
                    <form onSubmit={this.handleOnSubmit}>
                        <h1 className="h3 mb-3 fw-normal">Please Log In</h1>
                        <label htmlFor="inputEmail" className="visually-hidden">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="inputEmail"
                            className="form-control"
                            placeholder="Email address"
                            required
                            autoFocus
                            name="email"
                            value={email}
                            onChange={this.handleOnChangeLogin}
                        />
                        <label htmlFor="inputPassword" className="visually-hidden">
                            Password
                        </label>
                        <input
                            //type="password"
                            type="text"
                            id="inputPassword"
                            className="form-control"
                            placeholder="Password"
                            required
                            name="password"
                            value={password}
                            onChange={this.handleOnChangeLogin}
                        />
                        <button className="w-100 btn btn-lg btn-primary" type="submit">
                            Log in
                        </button>
                    </form>
                </main>
            </div>
        )
    }
}
