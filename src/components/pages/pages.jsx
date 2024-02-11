import React from "react";
import "./pages.css";
const Pages = () => {
  return (
    <>
      <div className="pages">
        <div className="pages-container">
          <div className="header">
            <div className="header-left">
              <div className="back">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"
                  ></path>
                </svg>
              </div>
              <div className="headings">
                <div className="heading">
                  <b
                    style={{
                      fontSize: "36px",
                      fontWeight: "700",
                      color: "black",
                    }}
                  >
                    VMS
                  </b>{" "}
                  / Cameras / Camera Details
                </div>
                <p>Bank Entrance-front-view Camera1</p>
                <h1>
                  View and manage camera details, recordings and connection
                  details
                </h1>
              </div>
              <div className="header-content"></div>
            </div>
            <div className="header-right">
              <div className="btn-2">Edit Camera</div>
              <div className="btn-2">Deactivate</div>
              <div
                style={{ color: "#ED1C24", border: "1px solid #ED1C24" }}
                className="btn-2"
              >
                Delete Camera
              </div>
            </div>
          </div>
          <div className="pages-conatiner-1">
            <div className="camera-buttons">
              <div className="button-cam">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#222222"
                    d="M18 9c0-1.103-.897-2-2-2h-1.434l-2.418-4.029A2.008 2.008 0 0 0 10.434 2H5v2h5.434l1.8 3H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3l4 2v-7l-4 2zm-1.998 9H4V9h12l.001 4H16v1l.001.001z"
                  ></path>
                  <path fill="#222222" d="M6 14h6v2H6z"></path>
                </svg>
                <p>View Recorded Videos</p>
              </div>
              <div className="button-cam">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#222222"
                    d="M15 12c0-1.7-1.3-3-3-3s-3 1.3-3 3s1.3 3 3 3s3-1.3 3-3m2-8.7C13.1 1.1 8.3 1.8 5.1 4.7V3c0-.6-.4-1-1-1s-1 .4-1 1v4.5c0 .6.4 1 1 1h4.5c.6 0 1-.4 1-1s-.4-1-1-1H6.2C7.7 4.9 9.8 4 12 4c4.4 0 8 3.6 8 8c0 .6.4 1 1 1s1-.4 1-1c0-3.6-1.9-6.9-5-8.7m2.9 12.2h-4.5c-.6 0-1 .4-1 1s.4 1 1 1h2.4C16.3 19.1 14.2 20 12 20c-4.4 0-8-3.6-8-8c0-.6-.4-1-1-1s-1 .4-1 1c0 5.5 4.5 10 10 10c2.6 0 5-1 6.9-2.8V21c0 .6.4 1 1 1s1-.4 1-1v-4.5c0-.6-.5-1-1-1"
                  ></path>
                </svg>
                <p>Refetch Camera</p>
              </div>
            </div>
            <div className="page-content">
              <div className="camera-feed">
                <img
                  src="https://s3-alpha-sig.figma.com/img/dbe5/8599/027f88064c915fe23e7da6a8db04d152?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bSzxfCbOw5HZCtZOdiqix6wwBEt~jya-NCFk8fR0IKxUO3MqQBERJTO3SEWHjwXKaSHx1nc0374YCKL7t8OhIhxYXbMeMaixZtUzZ5nkcOFN4HD5r9Y7XkIQikzQ~LTWxwAuU6VdvYvsNYZu-qj5vmYw18NOucVRurHKrG9BluUnIi4SVztUUmd5JrNFeTJ6aC5m1jTXO4pNzA0JMN7VWC3O9Ycb0wTYsZzL3h3MAeCWTRKKfTjrYhaaWufoAmk0WPAdKI~X7kbS1a4Nh9IB3DwlGsEAKYTb3I1hVUqI1lCIFXHiDEwBhOa7~XqHqZ71jzYU5a~-PuwKnVCgigC9UA__"
                  alt=""
                />
              </div>
              <div className="camera-feed-details">
                <div className="camera-details-head">
                  <h1>Camera Details</h1>
                  <div
                    style={{
                      backgroundColor: "#00DB4ADE",
                      height: "22px",
                      padding: "0",
                      width: "50px",
                    }}
                    className="btn"
                  >
                    Active
                  </div>
                </div>
                <div className="camera-feed-details-content">
                  <h1>Location:</h1>
                  <p>Coimbatore</p>
                </div>
                <div className="camera-feed-details-content">
                  <h1>City:</h1>
                  <p>Coimbatore</p>
                </div>
                <div className="camera-feed-details-content">
                  <h1>Timezone:</h1>
                  <p>Delhi-India</p>
                </div>
                <div className="camera-feed-details-content">
                  <h1>Date added:</h1>
                  <p>Aug 03, 2023 12:01:42 PM</p>
                </div>
                <div className="camera-feed-details-content">
                  <h1>Last update:</h1>
                  <p>Aug 03, 2023 12:01:42 PM</p>
                </div>
                <div
                  style={{ marginTop: "20px" }}
                  className="camera-feed-details-content"
                >
                  <h1>Manufacture details:</h1>
                  <p>ADT</p>
                </div>
                <div className="camera-feed-details-content">
                  <h1>RTSP/HLS URL:</h1>
                  <p
                    style={{
                      color: "#0043C4",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Copy URL
                  </p>
                </div>
              </div>
            </div>
            <div className="camera-feed-health">
              <h1>Camera Health and Alert</h1>
              <div className="camera-feed-alert">
                <div className="camera-feed-health-content">
                  <h2>Offline Alert</h2>
                  <p>If camera is continuously offline for</p>
                  <h1>12 minutes</h1>
                  <p>Send an email to</p>
                  <h2>email.com</h2>
                </div>
                <div className="camera-feed-health-content">
                  <h2>Health Grade</h2>
                  <h3>96%</h3>
                  <p>
                    Cheers, this camera had no offline time in the last 30 days
                  </p>
                  <h2 style={{ color: "#4CAF50" }}>Grade A</h2>
                </div>
                <div className="camera-feed-health-content">
                  <h2>Health Logs</h2>
                  <p>Today, 04:37 pm: Activated</p>
                  <p>23 Aug, 02:22 pm: Deactivated</p>
                  <p>21 Aug, 05:12 am: Activated</p>
                  <p>20 Aug, 02:12 am: Deactivated</p>
                  <p>19 Aug, 02:12 am: Deactivated</p>
                </div>
              </div>
            </div>
            <div className="other-cameras">
              <h1>Recent Recordings</h1>
              <div className="cameras-1">
                <div className="camera">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/858f/7625/7e1bdb331fa205fba9173b96b7ca0c1b?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GC6da2z0I3NOKp3BVIhNJxvTbJeH3ogwPFxbwQBHHNUATkDZIf9RIjsp34TAu1ruMxWE1CFhns6CY5V0lDA1QQieOlMjIpCPXkDSZs3wuTXi1FALhBMNOZQR5g6HBci0O9eXBS2syx2Amt~iS8Pqq2LUNVjeZMWEe3-A-AOLTtvxB4HLc8Er40hdmtrUBowJhpfrThV7wmeGGsKpPHklzKobR8azB2igO9wgbVal1yML1l~qOgUMQna1Z4kvBHxQHfsgVrLArz6crWWFlwwCo0boBkErphulZoc5AaF3eJI0UAOex~Zn3Bcs6CYwuxLAuefQIsgJHo9aKnN5UVmO5w__"
                    alt=""
                  />
                  <h1>Recording_0121</h1>
                  <p>Today, 04:42 pm</p>
                </div>
                <div className="camera">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/275c/b9b2/49c858c057e890366235bbdf0ee4a07e?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GS29eY7tvqRB0TK49kGIC3iauqbJHj8h7PHKDhuJaV3jSkKiN-XHQTW-VDDK7j4V8wW4p1mmLrPj7EPu4M6S9uRyXyLL1OkumKMXKbD5Gd4-IWjh4Sy9mw7sT1II0CKOBWm7pPuImdUxRP0ila6aT6vKGvOEAfyVZlYtRfQA0jlY85TaN6ChBtdFOZytz-FrDsahyZWi3pkB1j0KXnx9AeiNuLLOmRzJyFebI3fqzVDGKXIEcBXrGI0or~5azfW7DY91IKEXfsGohMhZD7c8TK4jCl1k-GDsKa8CtOqUX7JBpt4K~egVTX~DiK4H1rplEuULO4ZoLbTWhIYBXvk10A__"
                    alt=""
                  />
                  <h1>Recording_0121</h1>
                  <p>Today, 02:14 pm</p>
                </div>
                <div className="camera">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/d170/9cd9/4b1df7558cb0350eff0c6b0c4e231245?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xu3R5fXBMCCyCqzEdgzieU2DXVhHXIUUUM6oE0DIWmuw-tj6Yj5FFQxt3CtdzMjPS~djL5R51mTONWImt41WW8W90wMWUrnEhrsKzrLPlnn-8Rdki-HiKsAJQBOOdoCa0gEwuLCi6K~7T4zVv~cK9b4hHI91gLYbrMijFN2xuAW3etaoqyd5wgLhY8~XhGTeTvW4GAu0XVOxSY2jwQIP6VAhun3R7ZYLe7dQLd3YPpmMnBenFXMfIiHMTkHXhhsvXW4o1czup-NBE-2cQXPoNx6P0IQ6Sn8Cq52vaokJ7irZYZkk6czOfYM8nuOQs1MQdl4M-ctZNjw1EDIp8VugCA__"
                    alt=""
                  />
                  <h1>Recording_0121</h1>
                  <p>Today, 02:09 pm</p>
                </div>
                <div className="camera">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/858f/7625/7e1bdb331fa205fba9173b96b7ca0c1b?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GC6da2z0I3NOKp3BVIhNJxvTbJeH3ogwPFxbwQBHHNUATkDZIf9RIjsp34TAu1ruMxWE1CFhns6CY5V0lDA1QQieOlMjIpCPXkDSZs3wuTXi1FALhBMNOZQR5g6HBci0O9eXBS2syx2Amt~iS8Pqq2LUNVjeZMWEe3-A-AOLTtvxB4HLc8Er40hdmtrUBowJhpfrThV7wmeGGsKpPHklzKobR8azB2igO9wgbVal1yML1l~qOgUMQna1Z4kvBHxQHfsgVrLArz6crWWFlwwCo0boBkErphulZoc5AaF3eJI0UAOex~Zn3Bcs6CYwuxLAuefQIsgJHo9aKnN5UVmO5w__"
                    alt=""
                  />
                  <h1>Recording_0121</h1>
                  <p>Today, 01:11 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
