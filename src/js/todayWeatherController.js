import React from 'react';
import style from '../css/todayWeatherStyle.css';
class WeatherAnalysis extends React.Component{
  constructor(){
    super();
  this.state={

  }
  }
  render(){
    return(
      <div className="weatherAnalysis">
          <p className="weatherText">Today Weather Analysis</p>
          <hr noshade/>
      </div>
    )
  }
}
export default WeatherAnalysis;
