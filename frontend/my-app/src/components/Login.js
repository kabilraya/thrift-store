import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        <div className="auth-footer">
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
          <p>
            <Link to="/forgot-password">Forgot your password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
