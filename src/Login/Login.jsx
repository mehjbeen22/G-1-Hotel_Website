import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="submit">Login</button>
        <p>Not registered yet? <Link to="/signup">Sign up</Link></p>
      </form>
    </div>
  );
}
export default Login;
