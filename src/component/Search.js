import React, { Component } from 'react'
import axios from "axios";
import world from './images/world.jpeg'


export default class App extends Component {
    state = {
        data: [],
        country: "",
        isError: false,
        errorMessage: "",
        countryArray: [],
        countryData: null,
    };

    async componentDidMount() {
        try {
            // for dropdown
            let countryPayload = await axios.get("https://covid-api.mmediagroup.fr/v1/cases")
            let newCountryArray = []
            for (let key in countryPayload.data) {
                newCountryArray.push({
                    country: key,
                    data: countryPayload.data[key]
                })
            }
            this.setState({
                countryArray: newCountryArray,
            });
        } catch (e) {
            console.log(e);
        }
    }

    handleOnChange = (event) => {
        this.setState({
            country: event.target.value
        },
        )
    }

    handleOnClick = async (event) => {
        try {
            let foundCountry = this.state.countryArray.find(country => country.country === this.state.country)
            this.setState({
                countryData: foundCountry
            })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div style={{ marginTop: 50, textAlign: "center" }}>
                <img src={world} style={{ width: 500 }} />
                <br />
                <div className="lead" style={{fontSize: 16}}>
                    <label htmlFor="items" style={{ marginRight: 10 }}>Choose a country: </label>
                    <select id="items" onChange={this.handleOnChange} >
                        <option value="" selected disabled hidden>Choose here</option>
                        {this.state.countryArray.map(country =>
                            <option key={country.country} value={country.country}>
                                {country.country}
                            </option>)}
                    </select>
                    <button
                        className="btn btn-warning"
                        style={{ margin: "25px 25px" }}
                        onClick={this.handleOnClick}
                    >
                        Search
                </button>
                    {this.state.countryData !== null ? (
                    <div className="lead" style={{fontSize: 16}}>
                        {console.log(this.state.countryData)}
                        Population: {this.state.countryData.data.All.population}
                        <br />
                        Confirmed:{this.state.countryData.data.All.confirmed}
                        <br />
                        Death:{this.state.countryData.data.All.deaths}
                        <br />
                        Recovered: {this.state.countryData.data.All.recovered}    
                    </div>
                    ) : ""}
                </div>
            </div>
        )
    }
}