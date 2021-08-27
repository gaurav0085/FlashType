import React from "react";
import "./Nav.css";
import logo from "./../../assets/logo.png";

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">FlashType</p>
            </div>
            <div className="nav-right">
                <a
                    target="_blank"
                    className="nav-aam-link"
                    href="https://github.com/gaurav0085" // we will change it when we will create the MEGA website
                    rel="noreferrer" //The below AAM will be the back button when we will make mega site
                >
                    Contact us 
                </a>
            </div>
        </div>
    );
};

export default Nav;