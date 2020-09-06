import React from 'react';


import './App.css';

import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './component/weather.component';
import { render } from '@testing-library/react';

//api.openweathermap.org/data/2.5/weather?q=London,uk
const API_key = "805ea0e0782759c817dd9e07172d332e";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city:undefined,
      country:undefined,
      icon: undefined,
      min:undefined,
      celsius: undefined,
      temp_max:undefined,
      temp_min:undefined,
      description: "",
      error:false
    };
    this.getWeather();
  }

  calCelsius(temp){
    let cell = Math.floor(temp-273.15);
    return cell;
  }

  getWeather = async() =>{
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`);

    const response = await api_call.json();

    console.log(response);

    this.setState({
      city:response.name,
      country: response.sys.country,
      celsius:this.calCelsius(response.main.temp),
      temp_max:this.calCelsius(response.main.temp_max),
      temp_min:this.calCelsius(response.main.temp_min),
      description:response.weather[0].description
    });
  };
 
  state = {}

  render(){
    return(
      <div className="App">
        <Weather 
        city={this.state.city} 
        country={this.state.country} 
        temp_celsius={this.state.celsius} 
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        />
      </div>
    );
  }
}


export default App;
