import React from "react";
import { Link } from "react-router-dom";
import "./style/log_in.css";

function LogIn() {
  return (
    <>
      <div className="flex-r container-login">
        <div className="flex-r login-wrapper-login">
          <div className="login-text-login">
            <h1>Log In</h1>
            <p>
              Welcome!
              <br />
              We are glad that you chose us! Log In here...
            </p>
            <form className="flex-c">
              <div className="input-box-login">
                <span className="label-login">E-mail</span>
                <div className="flex-r input-login">
                  <input
                    type="text"
                    placeholder="name@abc.com"
                    className="login-input"
                  />
                  <i className="fas fa-at"></i>
                </div>
              </div>
              <div className="input-box-login">
                <span className="label-login">Password</span>
                <div className="flex-r input-login">
                  <input
                    type="password"
                    placeholder="enter your password"
                    className="login-input"
                  />
                  <i className="fas fa-lock"></i>
                </div>
              </div>
              <Link to="/posts">
                <input
                  className="btn-login-custom"
                  type="submit"
                  value="Log In"
                />
              </Link>
              <span className="extra-line-login">
                <span>Don't have an account?</span>
                <Link to="/sign_up">
                  <a>Sign Up</a>
                </Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
