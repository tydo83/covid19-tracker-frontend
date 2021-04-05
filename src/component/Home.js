import React, { Component } from 'react'
import axios from "axios";
export default class App extends Component {
    state = {
        data: [],
        country: "",
        isError: false,
        errorMessage: "",
    };

    async componentDidMount() {
        try {
            let payload = await axios.get(
                "https://covid-api.mmediagroup.fr/v1/cases?country=Global"
            );

            let countryObj = payload.data.All;
            let newCountryArrayData = [];
            newCountryArrayData.push(countryObj)
            console.log(countryObj)
            // for (let key in countryObj) {
            //     newCountryArrayData.push({
            //         countryData: countryObj[key],
            //         countryName: key,
            //     });
            // };
            this.setState({
                country: "Global",
                data: newCountryArrayData,
            });
        } catch (e) {
            console.log(e);
        }
    }

    showCountryData = () => {
        return this.state.data.map((item, index) => {
            return (
                <React.Fragment key={item.countryName}>
                    <h1> {this.state.country}</h1>
                    <div>Population: {item.population}</div>
                    <div>Confirmed: {item.confirmed}</div>
                    <div>Deaths: {item.confirmed}</div>
                    <div>Recoverd: {item.recovered}</div>
                </React.Fragment>
            );
        });
    };

    handleOnChange = (event) => {
        this.setState({
            country: event.target.value
        })
    }

    handleOnClick = async (event) => {
        if(this.state.country.length === 0) {
            this.setState({
                isError: true,
                errorMessage: "Please enter the country",
                country: "",
            })
            return;
        }
        try {
            let payload = await axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${this.state.country}`)
            let countryObj = payload.data.All;
            let newCountryArrayData = [];
            newCountryArrayData.push(countryObj)
            this.setState({
                data: newCountryArrayData
            })
            console.log(this.state.data)
        } catch(e) {
        console.log(e)
        }
    }

    render() {
        return (
            <div style={{ marginTop: 50, textAlign: "center" }}>
                <input
                    style={{ width: 450 }}
                    name="countyInput"
                    onChange={this.handleOnChange}
                />
                <br />
                <button
                    style={{ margin: "25px 25px" }}
                    onClick={this.handleOnClick}
                >
                    Search
                </button>
                {this.showCountryData()}
            </div>
        )
    }
}