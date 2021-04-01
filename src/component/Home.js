import React, { Component } from 'react'
import axios from "axios";
export default class App extends Component {
    state = {
        // data: [],
        data:""
    };

    async componentDidMount() {
        try {
            let payload = await axios.get(
                "https://covid-api.mmediagroup.fr/v1/cases"
            );
            // let countryObj = payload.data;
            // let newCountryArrayData = [];
            // for (let key in countryObj) {
            //     newCountryArrayData.push({
            //         countryData: countryObj[key],
            //         countryName: key,
            //     });
            // }
            // this.setState({
            //     data: newCountryArrayData,
            // });
            this.setState({
                data: payload.data
            })
        } catch (e) {
            console.log(e);
        }
    }
    showCountryData = () => {
        return this.state.data.map((item, index) => {
            return (
                <React.Fragment key={item.countryName}>
                    <h1> {item.countryName}</h1>
                    <div>Confirmed {item.countryData.All.confirmed}</div>
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
                />
                <br />
                <button
                    style={{ margin: "25px 25px" }}
                >
                    Search
        </button>
                console.log(this.state.data);
                {console.log(this.state.data.global)}
                {/* {this.showCountryData()} */}
            </div>
        )
    }
}