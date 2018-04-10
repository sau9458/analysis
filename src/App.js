import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      classData: "cell",
      classWeather: "cell"
    };
    this.changeColorData = this.changeColorData.bind(this);
    this.changeColorWeather = this.changeColorWeather.bind(this);
  }
  changeColorData() {
    this.setState({
      classData: "Data",
      classWeather: "cell"
    });
    this.props.history.push("/DataAnalysis");
  }
  changeColorWeather() {
    this.setState({
      classData: "cell",
      classWeather: "Weather"
    });
    this.props.history.push("/weatherAnalysis");
  }
  render() {
    return (
      <div className="contain">
        <div className="rows" onClick={this.changeColorData}>
          <p className={this.state.classData}>Data Analysis</p>
        </div>
        <div className="rows" onClick={this.changeColorWeather}>
          <p className={this.state.classWeather}>Today Weather</p>
        </div>
      </div>
    );
  }
}

export default App;
