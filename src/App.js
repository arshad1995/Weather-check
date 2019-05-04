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
    input: ""
  };

  api = nam => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${nam}&APPID=73a30d1298cbe84369f1de28b5942918`
    )
      .then(data => data.json())
      // .then(data => console.log(data))
      .then(data => this.setState({ weather: data }));
  };
  search = async () => {
    // await this.setState({ name: this.state.input });
    // console.log("name", this.state.input);
    this.api(this.state.input);
  };

  render() {
    return (
      <div className="app">
        {/* {console.log(
          this.state.weather &&
            this.state.weather.main && name: ""
            this.state.weather.main.pressure
        )} */}
        <div className="input">
          <input
            type="text"
            onChange={a => this.setState({ input: a.target.value })}
          />
          <button onClick={this.search}>search</button>
          <p className="cloud">
            {this.state.weather &&
              this.state.weather.weather &&
              this.state.weather.weather.map(b => b.description)}
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
            "https://cdn4.iconfinder.com/data/icons/energy-and-power-2-5/512/63-512.png"
          }
          humidityimg={
            "https://previews.123rf.com/images/nexusby/nexusby1610/nexusby161000019/63492133-humidity-icon-logo-element.jpg"
          }
          temperatureimg={
            "https://cdn1.iconfinder.com/data/icons/weather-filled-outline-1/50/Weather_Filled_Outline-21-512.png"
          }
        />
      </div>
    );
  }
}

export default App;
