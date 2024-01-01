import React from "react";
import "./SignupPage.css";

export const Signup = () => {
  return (
    <div className="signup">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="material-symbols" alt="Material symbols" src="material-symbols-filter-outline.png" />
          <img
            className="dashicons-buddicons"
            alt="Dashicons buddicons"
            src="dashicons-buddicons-buddypress-logo.png"
          />
          <img className="rectangle" alt="Rectangle" src="rectangle-2.png" />
          <div className="div" />
          <div className="confirm-password">
            <div className="overlap-group">
              <div className="text-wrapper">Confirm your Password</div>
              <img className="teenyicons-password" alt="Teenyicons password" src="teenyicons-password-solid.png" />
            </div>
          </div>
          <div className="sign-up-button">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Sign-up</div>
            </div>
          </div>
          <button className="login-button">
            <div className="overlap-2">
              <div className="text-wrapper-3">Login</div>
            </div>
          </button>
          <div className="password">
            <div className="overlap-group">
              <div className="text-wrapper-4">Enter your Password</div>
              <img className="teenyicons-password" alt="Teenyicons password" src="teenyicons-password-solid.svg" />
            </div>
          </div>
          <div className="username">
            <div className="overlap-group">
              <div className="text-wrapper-5">Enter your Username</div>
              <img className="vector" alt="Vector" src="vector.png" />
            </div>
          </div>
          <div className="email">
            <div className="overlap-group">
              <div className="e">Enter your Email</div>
              <img className="img" alt="Vector" src="vector.svg" />
            </div>
          </div>
          <div className="welcome">
            <div className="overlap-3">
              <img className="rectangle-2" alt="Rectangle" src="rectangle-10.png" />
              <div className="text-wrapper-6">Welcome to</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
