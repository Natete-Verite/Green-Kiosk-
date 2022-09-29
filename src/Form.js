import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import "./Form.css";
// import image from "./edishop.png";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Form = () => {
  const [email, setEmail] = useState("");
  console.log(email);
  const [password, setPassword] = useState("");
  console.log(password);
  const handleSubmit = () => {
    const data = {
      email: email,
      password: password,
    };
    alert(JSON.stringify(data));
  };
  return (
    <div className="form">
      <div className="logo">
        <p>Green Kiosk</p>
        <form onSubmit={handleSubmit}>
          <div className="credentials">
            {/* <p className="welcome">Welcome Back</p> */}
            <p id="email">Your email</p>
            <input
              type="text"
              id="emaill"
              placeholder="name@domain.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <p id="password">Password</p>
            <input
              type="password"
              id="passwordd"
              placeholder="at least 8 characters"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="check">
              <input type="checkbox" />
              Keep me logged in
              <p className="forgot">Forgot your password?</p>
            </div>
            <button type="login" className="login">
              Login
            </button>
            <p className="or">
              _________________________ Or ________________________
            </p>
            <div className="icons">
              <div className="facebook">
                <FaFacebook />
              </div>
              <div className="google">
                <FaGoogle />
              </div>
              <div className="instagram">
                <FaInstagram />
              </div>
            </div>
          </div>
        </form>
        
        {/* {email ? <Footer email= {email} /> : <Navbar />} */}
        
      </div>
      {/* <div className="image">
        <div className="signup">
          <p>
            Don't have an account? <a href="signup">Sign up</a>
          </p>
        </div>
        <img src={image} alt="img" />
      </div> */}
    </div>
  );
};
export default Form;