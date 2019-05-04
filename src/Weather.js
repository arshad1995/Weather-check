import React, { Component } from "react";
import "./Weather.css";
// const api_key = "73a30d1298cbe84369f1de28b5942918";
// const link = `http://api.openweathermap.org/data/2.5/weather?q=${
//   this.state.name
// }&APPID=${api_key}`;

class Weather extends Component {
  // state = {
  //   input: "",
  //   name: ""
  // };
  // search = () => {
  //   this.setState({ name: this.state.input });
  // };
  render() {
    return (
      <div className="main">
        {/* <div className="input">
          <input
            type="text"
            onChange={a => this.setState({ input: a.target.value })}
          />
          <button onClick={this.search}>search</button>
          <p>{this.state.name}</p>
        </div> */}
        {/* <div className="all"> */}
        <div className="pressure">
          <img src={this.props.pressureimg} />
          <p> {this.props.pressure}</p>
        </div>

        <div className="temperature">
          <img src={this.props.temperatureimg} />
          <p> {this.props.temperature}</p>
        </div>

        <div className="humidity">
          <img src={this.props.humidityimg} />
          <p> {this.props.humidity}</p>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default Weather;
