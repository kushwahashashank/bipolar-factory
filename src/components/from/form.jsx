"use client";
import React, { useState } from "react";
import "./form.css";
export default function Form() {
  const [user, setUser] = useState({
    name: "",
    companyname: "",
    industry: "",
    loactions: "",
  });
  const getUserData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="form_page">
        <div id="form">
          <div className="form_header">
            <h2>XYZ</h2>
            <p>Welcome Onboard</p>
          </div>
          <div className="form_input">
            <input
              placeholder="Your Name"
              className="input_values"
              type="text"
              name="name"
              value={user.name}
              onChange={getUserData}
              required
            />
            <input
              className="input_values"
              placeholder="Company Name"
              type="email"
              name="email"
              required
              value={user.companyname}
              onChange={getUserData}
            />
            <select
              className="input_values"
              name="industry"
              required
              value={user.industry}
              onChange={getUserData}
            >
              <option value="0">Select Industry</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 2</option>
            </select>
            <div className="locations">
              <p>Select Number of Locations</p>
              <div className="location-options">
                <div className="options">1-10</div>
                <div className="options">10-50</div>
                <div
                  className="options"
                  style={{ backgroundColor: "#333333", color: "white" }}
                >
                  50-150
                </div>
                <div className="options">150+</div>
              </div>
            </div>
            <button className="button">Continue</button>
          </div>
        </div>
      </div>
    </>
  );
}
