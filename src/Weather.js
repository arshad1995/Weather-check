import React, { Component } from "react";
import "./Weather.css";

class Weather extends Component {
  render() {
    return (
      <div className="main">
        <div className="pressure">
          <img src={this.props.pressureimg} />
          <p> {this.props.pressure}kpa</p>
        </div>

        <div className="temperature">
          <img src={this.props.temperatureimg} />
          <p> {this.props.temperature}F</p>
        </div>

        <div className="humidity">
          <img src={this.props.humidityimg} />
          <p> {this.props.humidity}%</p>
        </div>
      </div>
    );
  }
}

export default Weather;
