import React, { Component } from 'react'
import axios from "axios";
export default class App extends Component {
    state = {
        data: [],
        country: ""
    };

    async componentDidMount() {
        try {
            let payload = await axios.get(
                "https://covid-api.mmediagroup.fr/v1/cases?country=Global"
            );
            let countryObj = payload.data.All;
            let newCountryArrayData = [];
            newCountryArrayData.push(countryObj)
            console.log(newCountryArrayData)
            // for (let key in countryObj) {
            //     newCountryArrayData.push({
            //         countryData: countryObj[key],
            //         countryName: key,
            //     });
            // };
            this.setState({
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
                    <h1> {item.countryName}</h1>
                    <div>Population: {item.confirmed}</div>
                    <div>Confirmed: {item.confirmed}</div>
                    <div>Recoverd: {item.recovered}</div>
                    <div>Deaths: {item.confirmed}</div>
                </React.Fragment>
            );
        });
    };

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