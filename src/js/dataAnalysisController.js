import React from "react";
import style from "../css/dataAnalysisStyle.css";
import { Line } from "react-chartjs-2";

const LineGraph = props => {
  var data = {
    labels: ["2007", "2008", "2009", "2010", "2011"],
    datasets: [
      {
        label: "Male",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        data: [106898, 103937, 99492, 87213, 101943]
      },
      {
        label: "Female",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "black",
        borderColor: "black",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        data: [97516, 94796, 91818, 79673, 94684]
      }
    ]
  };
  return <Line data={data} />;
};
class DataAnalysis extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="dataAnalysis">
        <p className="dataText">Data Analysis</p>
        <hr />
        <div className="graphContainer">
          <p>Birth in Taiwan</p>
          <p>Source Ministary of Interior</p>
          <LineGraph />
        </div>
      </div>
    );
  }
}
export default DataAnalysis;
