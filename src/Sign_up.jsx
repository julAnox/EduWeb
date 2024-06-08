import React from "react";
import { Link } from "react-router-dom";
import "./style/sign_up.css";

function SignUp() {
  return (
    <div className="flex-r container-sign-up">
      <div className="flex-r login-wrapper-sign-up">
        <div className="login-text-sign-up">
          <h1>Sign Up</h1>
          <p>
            Please enter your E-mail address, then create your own account
            password.
          </p>
          <form className="flex-c">
            <div className="input-box-sign-up">
              <span className="label-sign-up">E-mail</span>
              <div className="flex-r input-sign-up">
                <input type="text" placeholder="name@abc.com" />
                <i className="fas fa-at"></i>
              </div>
            </div>
            <div className="input-box-sign-up">
              <span className="label-sign-up">Password</span>
              <div className="flex-r input-sign-up">
                <input type="password" placeholder="create a password" />
                <i className="fas fa-lock"></i>
              </div>
            </div>
            <div className="input-box1-sign-up">
              <span className="label-sign-up">Repeat password</span>
              <div className="flex-r input1-sign-up">
                <input type="password" placeholder="create a password" />
                <i className="fas fa-lock"></i>
              </div>
            </div>
            <div className="check-sign-up">
              <input type="checkbox" />
              <span>I've read and agree with all of instructions</span>
            </div>
            <Link to="/email">
              <input
                className="btn-sign-up"
                type="submit"
                value="Create an Account"
              />
            </Link>
            <span className="extra-line-sign-up">
              <span>Already have an account?</span>
              <Link to="/log_in">
                <a>Log In</a>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
