import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Profile/index.js';
import AppIcon from "../../images/icon.png";
import "./index.css";

 class Navbar extends Component {
    render() {
        return (
            <div className="header">
                <img src={AppIcon} alt="icon" />
                <a href="index.php" className="logo">Čia gyvena laimė</a>
                <Profile />
            </div>
        )
    }
}

export default Navbar;

