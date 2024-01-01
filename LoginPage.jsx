import React from "react";
import "./LoginPage.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />
          <div className="welcome">
            <div className="overlap-group">
              <img className="img" alt="Rectangle" src="rectangle-10.png" />
              <div className="text-wrapper">Welcome to</div>
            </div>
          </div>
          <div className="group">
            <div className="div-wrapper">
              <div className="div">Login</div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              <div className="text-wrapper-2">Forgot password ?</div>
            </div>
          </div>
          <div className="group-2">
            <div className="overlap-3">
              <div className="text-wrapper-3">Enter your Password</div>
              <img className="teenyicons-password" alt="Teenyicons password" src="teenyicons-password-solid.svg" />
            </div>
          </div>
          <div className="group-3">
            <div className="overlap-3">
              <div className="e">Enter your Email</div>
              <img className="vector" alt="Vector" src="vector.svg" />
            </div>
          </div>
          <div className="group-4">
            <p className="p">Dont have an acount ?</p>
            <div className="text-wrapper-4">Sign-up</div>
          </div>
        </div>
      </div>
    </div>
  );
};
