import React from "react";
import { Link } from "react-router-dom";
import "./style/email.css";

function Email() {
  return (
    <div className="email-main">
      <h2 className="email-up">Confirm the action on the page</h2>
      <h2 className="email-mid">
        To your email***@gmail.com I received a message with a code
        confirmation. Enter it in the box below!
      </h2>
      <div className="email-code">
        <input
          type="text"
          className="email-input"
          placeholder="Type your code"
          maxLength="6"
        />
      </div>
      <Link to="/info_about">
        <button className="email-button">Submit</button>
      </Link>
    </div>
  );
}

export default Email;
