import React from "react";
import "./charts.css";
const Charts = () => {
  return (
    <div className="charts">
      <div className="charts-container">
        <h1>Camera Health</h1>
        <div className="chart-conatiner-main">
          <div className="chart-conatiner-left">
            <div className="conic-chart">
              <div className="white-center"></div>
            </div>
          </div>
          <div className="chart-conatiner-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
