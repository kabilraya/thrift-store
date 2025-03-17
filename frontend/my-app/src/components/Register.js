import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="Enter your first name" required />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Enter your last name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Register
          </button>
        </form>
        <div className="auth-footer">
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
