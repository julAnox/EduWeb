import React from "react";
import { Link } from "react-router-dom";
import "./style/info_about.css";

function InfoAbout() {
  return (
    <div className="info-about-main">
      <h2 className="info-about-up">Continue registration</h2>
      <div className="info-about-mid">
        <p>Name:</p>
        <input type="text" className="info-about-input" />
        <p>Surname:</p>
        <input type="text" className="info-about-input" />
        <p>Fathers name:</p>
        <input type="text" className="info-about-input" />
        <br />

        <label htmlFor="userRole">Who you are?</label>
        <br />
        <select id="userRole" className="info-about-select">
          <option>Student</option>
          <option>Teacher</option>
          <option>Director</option>
        </select>
        <br />

        <label htmlFor="educational">Select educational institution</label>
        <br />
        <select id="educational" className="info-about-select">
          <option>School</option>
          <option>College</option>
          <option>University</option>
          <br />
        </select>
        <p>Enter the name of the educational institution</p>
        <input type="text" className="info-about-input" />
      </div>
      <div className="info-about-btn">
        <Link to="/success">
          <button className="info-about-button">Continue</button>
        </Link>
      </div>
    </div>
  );
}

export default InfoAbout;
