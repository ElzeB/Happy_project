import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Profile/index.js';
import {connect} from 'react-redux';
import AppIcon from "../../images/icon.png";
import PropTypes from 'prop-types';
import { logoutUser } from '../../redux/actions/userActions.js';
// import Notifications from './Notifications';
import "./index.css";

 class Navbar extends Component {

    handleLogout = () => {
        this.props.logoutUser();
      };

    render() {
        const { authenticated } = this.props
        return (
            <div className="header">
                {authenticated ? (
                    <Fragment>
                        <img src={AppIcon} className="logo-image" alt="icon" />
                        <Link to="/" className="logo">Čia gyvena laimė</Link>
                        {/* <Notifications /> */}
                        <div className="navBar-right-component">
                            <Link to="/" className="connections-links" onClick={this.handleLogout}>LOGOUT</Link>
                            <Profile />
                        </div>
                    </Fragment>
                ) : (
                    <Fragment>
                        <img src={AppIcon} className="logo-image" alt="icon" />
                        <Link to="/" className="logo">Čia gyvena laimė</Link>
                            <div className="connections-links">
                                <Link to="/login" className="login-link">LOGIN</Link>
                                <Link to="/signup" className="signup-link">SIGNUP</Link>
                            </div>
                    </Fragment>
                )}
            </div>
        )
    } 
}

Navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    logoutUser: PropTypes.func.isRequired
  };
  
  const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
  });

  const mapActionsToProps = { logoutUser};

export default connect (mapStateToProps, mapActionsToProps)(Navbar);

