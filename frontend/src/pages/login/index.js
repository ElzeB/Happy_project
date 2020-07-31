import React, { Component } from "react";
import PropTypes from "prop-types";
import AppIcon from "../../images/icon.png";
import { Link } from "react-router-dom";
import "./index.css";
//Redux stuf
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.UI.errors) {
      this.setState({errors: nextProps.UI.errors});
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }; 

  render() {
    const { errors} = this.state;
    return (
      <div className="login-wrap">
        <div className="login-container">
          <img src={AppIcon} alt="icon" />
          <h4>Login</h4>
          <form noValidate className="login-form " onSubmit={this.handleSubmit}>
            <input
              className="form-control border-bottom"
              type="text"
              placeholder="Email"
              name="email"
              type="email"
              label="Email"
              small={errors.email} 
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              className="form-control border-bottom"
              type="text"
              placeholder="Password"
              name="password"
              type="password"
              label="Password"
              small={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
            />
            {errors.general && (
              <div  className="customError">
                {errors.general}
              </div>
            )}
            <button type="submit" className="btn btn-secondary">
              Login
            </button>
            <h6>
            Dont have an account ? Sign up <Link to="/signup">here</Link>
            </h6>
          </form>
        </div>
      </div>
    );
  }
}

login.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
  });
  
  const mapActionsToProps = {
    loginUser
  };

export default connect(mapStateToProps, mapActionsToProps)(login);

