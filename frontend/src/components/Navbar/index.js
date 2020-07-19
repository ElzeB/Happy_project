import React, { Component } from 'react';
import "./index.css";
import Link from 'react-router-dom/Link';

 class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="header fixed-top d-flex justify-content-between navbar p-4">
                    <div>
                        <a className="fas fa-bars"></a>
                    </div>
                    <div>
                        <a href="index.php" className="logo text-uppercase text-body font-weight-bold"><u>Čia gyvena laimė</u></a>
                    </div>
                    <div>
                        <a className="fas fa-search"></a>
                    </div>
                </div>
                <div className="header_search">
                    <input autofocus="" className="search_aerea" name="search_value" placeholder="Įveskite tekstą ir paspauskite ENTER" type="text" /> <a class="fas fa-times" href=""></a>
                </div>
            </div>
        )
    }
}

export default Navbar;

