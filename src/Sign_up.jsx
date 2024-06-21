import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style/sign_up.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      email: email,
      password: password,
    };

    try {
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/info_about");
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  return (
    <div className="flex-r container-sign-up">
      <div className="flex-r login-wrapper-sign-up">
        <div className="login-text-sign-up">
          <h1>Sign Up</h1>
          <p>
            Please enter your E-mail address, then create your own account
            password.
          </p>
          <form className="flex-c" onSubmit={handleSubmit}>
            <div className="input-box-sign-up">
              <span className="label-sign-up">E-mail</span>
              <div className="flex-r input-sign-up">
                <input
                  type="text"
                  placeholder="name@abc.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <i className="fas fa-at"></i>
              </div>
            </div>
            <div className="input-box-sign-up">
              <span className="label-sign-up">Password</span>
              <div className="flex-r input-sign-up">
                <input
                  type="password"
                  placeholder="create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i className="fas fa-lock"></i>
              </div>
            </div>
            <div className="input-box1-sign-up">
              <span className="label-sign-up">Repeat password</span>
              <div className="flex-r input1-sign-up">
                <input
                  type="password"
                  placeholder="repeat your password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  required
                />
                <i className="fas fa-lock"></i>
              </div>
            </div>
            <div className="check-sign-up">
              <input type="checkbox" required />
              <span>I've read and agree with all of the instructions</span>
            </div>
            <button className="btn-sign-up" type="submit">
              Create an Account
            </button>
            <span className="extra-line-sign-up">
              <span>Already have an account?</span>
              <Link to="/log_in">Log In</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
