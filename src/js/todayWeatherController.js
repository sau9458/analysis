import React from "react";
import style from "../css/todayWeatherStyle.css";
import * as action from "./redux/action/action";
import { connect } from "react-redux";
import sun from "../image/sun.png";
import rainCloud from "../image/rain-cloud.png";
import na from "../image/not-applicable.png";
import loading from "../image/loading.png";
import cloud from "../image/cloud.png";

class WeatherAnalysis extends React.Component {
  constructor() {
    super();
    this.state = {
      country: "",
      city: "",
      temp: "",
      humidity: "",
      image: "",
      errormsg:false
    };
  }
  componentWillReceiveProps(props) {
    this.setState({
      temp: props.getDetails.main && props.getDetails.main.temp,
      humidity:props.getDetails.main && props.getDetails.main.humidity,
      img:props.getDetails.weather && props.getDetails.weather.description
    });
    if (props.getDetails.weather&& props.getDetails.weather[0].description == "cloud") {
      this.setState({
        image: cloud,
        errormsg:false
      });
    } else if (props.getDetails.weather &&props.getDetails.weather[0].description == "rain") {
      this.setState({
        image: rainCloud,
        errormsg:false
      });
    } else if (props.getDetails.weather && props.getDetails.weather[0].description == "clear") {
      this.setState({
        image: sun,
        errormsg:false
      });
    }else if(props.getDetails.cod==404) {
      this.setState({
        errormsg:true,
        image:''
      })
    }
    else {
      this.setState({
        image: na,
        errormsg:false
      });
    }
  }
  onSubmitHandle(e) {
    e.preventDefault();
    let dataLogin = {
      city: this.state.city,
      country: this.state.country
    };
    this.props.onClickHandle(dataLogin);
    this.setState({
      image: loading
    });
  }
  handleCityChange = e => {
    this.setState({ city: e.target.value });
  };

  handleCountryChange = e => {
    this.setState({ country: e.target.value });
  };
  render() {
    return (
      <div className="weatherAnalysis">
        <p className="weatherText">Today Weather Analysis</p>
        <hr noshade />
        <div className="weatherConatiner">
      {this.state.errormsg?<div className="error">Not found city</div>:null}
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <label >City:</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.city}
                  onChange={this.handleCityChange}
                />
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-group ">
                <label >Country Code:</label>
                <input
                  type="text"
                  className="form-control code"
                  value={this.state.country}
                  onChange={this.handleCountryChange}
                />
              </div>
            </div>
            <div className="col-sm-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={e => this.onSubmitHandle(e)}
              >
                Search
              </button>
            </div>
          </div>
          <img src={this.state.image} className="icon" />
          <div className="temp">Temperature:{this.state.temp}</div>
          <div className="humidity">Humidity:{this.state.humidity}</div>
        </div>
      </div>
    );
  }
}
export function mapStateToProps(state) {
  return {
    getDetails: state.getDetails
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClickHandle: e => dispatch(action.requestWeather(e))
  };
}

const WeatherAnalysisData = connect(mapStateToProps, mapDispatchToProps)(
  WeatherAnalysis
);
export default WeatherAnalysisData;
