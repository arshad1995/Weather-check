import React, { Component } from "react";
import "./App.css";
import Weather from "./Weather";

// let weather = [
//   {
//     pressure: "30.20",
//     humidity: "19%",
//     temperature: "37"
//   }
// ];

class App extends Component {
  state = {
    weather: {},
    input: "",
    error: ""
  };

  api = nam => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${nam}&APPID=73a30d1298cbe84369f1de28b5942918`
    )
      .then(data => data.json())
      // .then(data => console.log(data))
      .then(data => this.setState({ weather: data, error: data.message }));
  };
  // search = async () => {
  search = () => {
    // await this.setState({ name: this.state.input });
    // console.log("name", this.state.input);

    this.api(this.state.input);
  };

  render() {
    console.log(this.state.weather);
    return (
      <div className="app">
        {/* {console.log(
          this.state.weather &&
            this.state.weather.main && name: ""
            this.state.weather.main.pressure
        )} */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className="input">
          <input
            type="text"
            placeholder="search..."
            onChange={a => this.setState({ input: a.target.value })}
          />
          <button onClick={this.search}>
            <i class="fa fa-search" />
          </button>
          <p>city:{this.state.weather && this.state.weather.name}</p>
          <p>
            {this.state.weather &&
              this.state.weather.weather &&
              this.state.weather.weather.map(b => b.description)}
          </p>
          <p>
            long:
            {this.state.weather &&
              this.state.weather.coord &&
              this.state.weather.coord.lon}
          </p>
          <p>
            lat:
            {this.state.weather &&
              this.state.weather.coord &&
              this.state.weather.coord.lat}
          </p>
          wind
          <p>
            speed:
            {this.state.weather &&
              this.state.weather.wind &&
              this.state.weather.wind.speed}
          </p>
          <p>
            deg:
            {this.state.weather &&
              this.state.weather.wind &&
              this.state.weather.wind.deg}
          </p>
        </div>

        <Weather
          pressure={
            this.state.weather &&
            this.state.weather.main &&
            this.state.weather.main.pressure
          }
          humidity={
            this.state.weather &&
            this.state.weather.main &&
            this.state.weather.main.humidity
          }
          temperature={
            this.state.weather &&
            this.state.weather.main &&
            this.state.weather.main.temp
          }
          pressureimg={
            "https://cdn1.iconfinder.com/data/icons/power-industry/60/control_panel_icon_meter_indicator_level_gauge_pressure_counter-512.png"
          }
          humidityimg={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gROLsYJKSBGj_1DNCAl6Rb0avMnU3ov7AlDV_3NCuWG66d7r"
          }
          temperatureimg={
            "https://cdn1.iconfinder.com/data/icons/weather-filled-outline-1/50/Weather_Filled_Outline-21-512.png"
          }
        />
        <p className="err">{this.props.error}</p>
      </div>
    );
  }
}

export default App;
