import React, { Component } from 'react'
import axios from "axios";
import world from './images/world.jpeg'


export default class App extends Component {
    state = {
        data: [],
        country: "",
        isError: false,
        errorMessage: "",
        countryArray:[],
        countryData: null,
    };

    async componentDidMount() {
        try {
            // for dropdown
            let countryPayload = await axios.get("https://covid-api.mmediagroup.fr/v1/cases")
            let newCountryArray = []
            for(let key in countryPayload.data) {
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

    // showCountryData = () => {
    //     return this.state.data.map((item, index) => {
    //         if (item !== undefined) {
    //             return (
    //                 <React.Fragment key={index}>
    //                     <h1> {this.state.country} </h1>
    //                     <div>Population: {item.population}</div>
    //                     <div>Confirmed: {item.confirmed}</div>
    //                     <div>Deaths: {item.confirmed}</div>
    //                     <div>Recovered: {item.recovered}</div>
    //                 </React.Fragment>
    //             );
    //         } else {
    //             return (
    //                 <>
    //                     <p>Sorry, the country you are looking for is not in our database</p>
    //                 </>
    //             )
    //         }

    //     });
    // };

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
                <img src={world} style={{width: 500}}/>
                <br />
                <div>
                <label htmlFor="items" style={{ marginRight: 10 }}>Choose a country: </label>
                <select id="items" onChange={this.handleOnChange} >
                    <option value="" selected disabled hidden>Choose here</option>
                    {this.state.countryArray.map(country => 

                    <option key={country.country} value={country.country}>
                        {country.country}
                    </option>)}            
                </select>
                <button
                    style={{ margin: "25px 25px" }}
                    onClick={this.handleOnClick}
                >
                    Search
                </button>
                {this.state.countryData !== null ? (
                    <div>
                        {console.log(this.state.countryData)}
                        {this.state.countryData.country}
                        {this.state.countryData.data.All.deaths}

                    </div>
                ) : "" }
                </div>
                </div>
        )
    }
}