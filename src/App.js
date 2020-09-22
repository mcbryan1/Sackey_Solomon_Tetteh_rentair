import React, { Component } from "react";
import "./App.css";
import NewsTemplate from "./NewsTemplate";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      data: {},
    };
  }

  fetchWeatherData = () => {
    fetch(
      "https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=London%252Cuk",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "b6b3c5a4e4msh198cae472f93a01p13d823jsn01d78610fd54",
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        let weatherData = {
          country: response.main.country,
          city: response.name,
          feels_like: response.main.feels_like,
          temp_min: response.main.temp_min,
          temp_max: response.main.temp_max,
          temp: response.main.temp,
        };
        this.setState({
          data: weatherData,
         
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.fetchWeatherData();
  }
  render() {
    return (
      <div>
        <NewsTemplate weatherData={this.state.data} />
      </div>
    );
  }
}

export default App;
