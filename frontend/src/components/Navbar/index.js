import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

 class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="header">
		            <div>
			            <a href="index.php" className="logo">Čia gyvena laimė</a>
		            </div>
                </div>
            </div>
        )
    }
}

export default Navbar;

