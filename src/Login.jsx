import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://193.168.49.29:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to log in: ${errorText}`);
      }

      const responseData = await response.json();
      localStorage.setItem("userToken", responseData.token);

      navigate("/profile");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

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
            <form className="flex-c" onSubmit={handleSubmit}>
              <div className="input-box-login">
                <span className="label-login">E-mail</span>
                <div className="flex-r input-login">
                  <input
                    type="text"
                    placeholder="name@abc.com"
                    className="login-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <i className="fas fa-lock"></i>
                </div>
              </div>
              <button className="btn-login-custom" type="submit">
                Log In
              </button>
              <span className="extra-line-login">
                <span>Don't have an account?</span>
                <Link to="/signup">Sign Up</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
