"use client";
import React, { useState } from "react";
import "./charts.css";

const Charts = () => {
  const [data, setData] = useState([
    360 * (56 / 124),
    360 * (91 / 124),
    360 * (118 / 124),
  ]);
  return (
    <div className="charts">
      <div className="charts-container">
        <h1>Camera Health</h1>
        <div className="chart-conatiner-main">
          <div className="chart-conatiner-left">
            <div
              style={{
                backgroundImage: `conic-gradient(#19A01E ${0}deg,#19A01E ${
                  data[0]
                }deg,#00DB4A ${data[0]}deg,#00DB4A ${data[1]}deg,#FB8B34 ${
                  data[1]
                }deg,#FB8B34 ${data[2]}deg,#ED1C24 ${data[2]}deg)`,
              }}
              className="conic-chart"
            >
              <div className="white-center">
                <h1>124</h1>
                <p>Cameras</p>
              </div>
            </div>
          </div>
          <div className="chart-conatiner-right">
            <div className="cameras">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
                style={{ fontSize: "20px" }}
              >
                <path
                  fill="#0043c4"
                  d="M109.285 30.402c-14.82-.007-30.414 2.144-46.822 6.932a9.5 9.5 0 0 0-.145.05a9.5 9.5 0 0 0-.496.173a9.5 9.5 0 0 0-.39.152a9.5 9.5 0 0 0-.47.218a9.5 9.5 0 0 0-.384.193a9.5 9.5 0 0 0-.463.273a9.5 9.5 0 0 0-.342.22a9.5 9.5 0 0 0-.435.32a9.5 9.5 0 0 0-.324.256a9.5 9.5 0 0 0-.397.357a9.5 9.5 0 0 0-.297.29a9.5 9.5 0 0 0-.37.405a9.5 9.5 0 0 0-.247.293a9.5 9.5 0 0 0-.342.463a9.5 9.5 0 0 0-.215.315a9.5 9.5 0 0 0-.282.472a9.5 9.5 0 0 0-.193.354a9.5 9.5 0 0 0-.233.497a9.5 9.5 0 0 0-.156.367a9.5 9.5 0 0 0-.178.512a9.5 9.5 0 0 0-.122.386a9.5 9.5 0 0 0-.17.688L33.42 156.55a9.5 9.5 0 0 0 5.625 10.614l82.023 34.578l31.62 162.133l-116.534 25.313a9.5 9.5 0 0 0-7.5 9.156l-1.062 76.47A9.5 9.5 0 0 0 39.967 484l146.468-46.813l24.123-4.677c.177.003.353.015.53.015c9.956 0 19.332-4.742 25.88-12.472c6.543-7.724 9.966-17.79 9.956-28.16v-.026c.006-6.574-1.372-13.037-4.045-18.855l-25.273-130.57l125.774 53.02a9.5 9.5 0 0 0 .155.058a9.5 9.5 0 0 0 .545.197a9.5 9.5 0 0 0 .35.11a9.5 9.5 0 0 0 .543.138a9.5 9.5 0 0 0 .416.086a9.5 9.5 0 0 0 .483.073a9.5 9.5 0 0 0 .482.05a9.5 9.5 0 0 0 .43.02a9.5 9.5 0 0 0 .54.004a9.5 9.5 0 0 0 .363-.01l83.406-5.28a9.5 9.5 0 0 0 7.97-5.438l50.522-106.954l.008-.014a9.5 9.5 0 0 0 0-.002a9.5 9.5 0 0 0 .02-.047a9.5 9.5 0 0 0-5.51-13.137a93.45 93.45 0 0 0-23.956-9.148L152.273 36.688a9.5 9.5 0 0 0-.802-.268c-13.317-3.843-27.364-6.01-42.185-6.018zM82.938 44.125a9.5 9.5 0 0 1 3.687.72l290.75 116.53a9.508 9.508 0 0 1 5.77 10.79a9.5 9.5 0 0 0-.707 1.46l-.836 2.07a9.508 9.508 0 0 1-11.29 3.336L79.563 62.47a9.5 9.5 0 0 1 3.376-18.345zm357.308 128.367c4.4.038 8.75.508 13.068 1.404l14.74 5.72l-23.67 50.114c.912-4.058 1.378-8.082 1.335-11.855c-.1-8.732-2.94-15.95-7.845-19.563c-4.905-3.613-11.688-3.48-18.375.25c-1.65.92-3.305 2.063-4.906 3.375c.614-.822 1.19-1.72 1.687-2.687c1.417-2.757 2.248-5.952 2.22-8.78c-.032-2.835-.945-5.243-2.563-6.47a4.354 4.354 0 0 0-2.75-.906c-1.01.016-2.102.332-3.156.937c-2.107 1.212-4.08 3.52-5.5 6.282c-1.417 2.764-2.25 5.948-2.217 8.782c.03 2.833.945 5.242 2.562 6.47c1.617 1.225 3.798 1.147 5.906-.064c-3.416 3.562-6.546 7.9-9.092 12.72c-4.608 8.716-7.226 18.798-7.125 27.53c.1 8.732 3 15.98 7.906 19.594c4.904 3.614 11.624 3.45 18.31-.28c4.178-2.332 8.29-6.018 11.91-10.582l-8.41 17.8l-62.75 4l37.253-92.39c14.635-7.746 28.272-11.513 41.463-11.4zm-298.078 38.145l16.014 6.752l29.732 139.555a31.974 31.974 0 0 0-9.342-1.41c-2.724 0-5.4.366-7.988 1.037l-28.416-145.935zm37.353 15.748l17.017 7.174l23 118.83a31.875 31.875 0 0 0-8.447-1.156c-1.643 0-3.266.14-4.865.39l-26.704-125.24zM211.09 370.3c3.863 0 8.258 1.978 11.472 5.772c3.215 3.795 5.433 9.89 5.424 15.795a9.47 9.532 0 0 0 0 .026c.01 5.905-2.21 12-5.423 15.795a17.054 17.054 0 0 1-5.188 4.142l-6.143 1.19c2.106-5.273 3.184-11.002 3.178-16.827v-.025a46.086 46.086 0 0 0-1.342-11.107a9.5 9.5 0 0 0-.193-2.248l-2.656-12.458c.29-.022.583-.055.87-.055zm-32.518 4.3c3.864 0 8.26 1.978 11.475 5.773c3.214 3.795 5.43 9.89 5.422 15.795a9.47 9.532 0 0 0 0 .025c.008 5.905-2.21 12-5.423 15.795c-3.215 3.795-7.61 5.774-11.475 5.774c-3.863 0-8.233-1.98-11.447-5.774c-3.214-3.794-5.458-9.89-5.45-15.795a9.47 9.532 0 0 0 0-.025c-.008-5.905 2.236-12 5.45-15.795s7.584-5.773 11.447-5.773zm-34.496 10.59a46.063 46.063 0 0 0-1.312 10.978v.025c-.01 10.37 3.41 20.437 9.953 28.16c.838.99 1.723 1.93 2.648 2.817L46.78 461.875l.782-55.72l96.514-20.966z"
                ></path>
              </svg>
              <p>
                Totally <b style={{ fontSize: "16px" }}>124</b> Cameras are in{" "}
                <b style={{ fontSize: "16px" }}>9 NVR</b>s and installed in 12
                Locations
              </p>
            </div>
            <div className="cameras-down">
              <div style={{ display: "flex" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  style={{ fontSize: "20px" }}
                >
                  <path
                    fill="#ed1c46"
                    d="m21.17 15.4l-5.91-9.85c-.78-1.3-1.96-2.04-3.26-2.04s-2.48.74-3.26 2.03L2.83 15.4c-.44.73-.66 1.49-.66 2.21c0 .57.14 1.13.42 1.62C3.23 20.35 4.47 21 6 21h12c1.53 0 2.77-.65 3.41-1.77c.28-.49.42-1.02.42-1.58c.01-.74-.21-1.51-.66-2.25M12 8.45c.85 0 1.55.7 1.55 1.55c0 .85-.69 1.55-1.55 1.55c-.85 0-1.55-.7-1.55-1.55c0-.86.69-1.55 1.55-1.55m1.69 8.46c-.03.04-.8.92-2.07.92h-.15c-.51-.03-.93-.25-1.18-.63c-.31-.47-.36-1.11-.12-1.82l.41-1.22c.23-.68.01-.79-.11-.85l-.14-.02c-.25 0-.6.15-.71.21c-.1.05-.23.03-.31-.07c-.07-.1-.07-.23.01-.32c.03-.04.87-.99 2.22-.91c.51.03.93.25 1.18.63c.32.47.36 1.11.12 1.83l-.41 1.22c-.23.68-.01.79.11.85l.14.02c.25 0 .6-.15.71-.2c.11-.06.23-.03.31.07c.07.07.07.2-.01.29"
                  ></path>
                </svg>
                <p>
                  <b style={{ fontSize: "16px" }}>6</b> Cameras were
                  experiencing downtime in Last 30 days
                </p>
              </div>
              <div className="btn-1">View Cameras</div>
            </div>
            <div className="cameras-status">
              <div className="status-values">
                <div
                  style={{ backgroundColor: "#19A01E" }}
                  className="icon"
                ></div>
                <p>Super Healthy (56)</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                  style={{
                    marginLeft: "8px",
                    marginRight: "20px",
                    fontSize: "18px",
                  }}
                >
                  <path
                    fill="#8f90a6"
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12 112a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 0 16"
                  ></path>
                </svg>
              </div>
              <div className="status-values">
                <div
                  style={{ backgroundColor: "#00DB4A" }}
                  className="icon"
                ></div>
                <p>Healthy (35)</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                  style={{
                    marginLeft: "8px",
                    marginRight: "20px",
                    fontSize: "18px",
                  }}
                >
                  <path
                    fill="#8f90a6"
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12 112a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 0 16"
                  ></path>
                </svg>
              </div>
              <div className="status-values">
                <div
                  style={{ backgroundColor: "#FB8B34" }}
                  className="icon"
                ></div>
                <p>Warning (27)</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                  style={{
                    marginLeft: "8px",
                    marginRight: "20px",
                    fontSize: "18px",
                  }}
                >
                  <path
                    fill="#8f90a6"
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12 112a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 0 16"
                  ></path>
                </svg>
              </div>
              <div className="status-values">
                <div
                  style={{ backgroundColor: "#ED1C24" }}
                  className="icon"
                ></div>
                <p>Danger (6)</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                  style={{ marginLeft: "8px", fontSize: "18px" }}
                >
                  <path
                    fill="#8f90a6"
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12 112a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 0 16"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
