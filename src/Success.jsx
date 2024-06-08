import React from "react";
import { Link } from "react-router-dom";
import "./style/success.css";

function Success() {
  return (
    <div className="main-success">
      <h2 className="up-success">You have successfully registered!</h2>
      <p>
        The director of your school has received notification of your
        registration and must confirm that you are indeed a student of this
        educational institution. If you are indeed a student, you will receive a
        notification to your email that you have been verified and will be able
        to use the application.
      </p>
      <Link to="/posts">
        <button className="button-success">Go to your personal account</button>
      </Link>
    </div>
  );
}

export default Success;
