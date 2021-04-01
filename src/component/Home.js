import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
    state = {
        data: ""
    }
    // console.log(props)

    componentDidMount() {
        try {
            let payload = axios.get("https://covid-api.mmediagroup.fr/v1/cases")
            this.setState({
                data: payload
            })
        } catch(e) {
            console.log(e)
        }
    }
    
    render() {
        return (
            <div style={{ marginTop: 50, textAlign: "center" }}>
                <input 
                    style={{ width:300 }}
                    name="city"    
                />
                <br />
                <button style={{ margin: 10 }} >
                    Search
                </button>
            </div>
        )
    }
}
