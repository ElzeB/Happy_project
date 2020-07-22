import React, { Component } from "react";
import PropTypes from "prop-types";
import AppIcon from "../../images/icon.png";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./index.css";

// import { connect } from 'react-redux';
// import { signupUser } from '../redux/actions/userActions';

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
        loading: true
    });
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
 axios.post('/login', userData)
    .then(res => {
        console.log(res.data);
        localStorage.setItem('FBidToken', `Bearer ${res.data.token}` );
        this.setState({
            loading: false
        });
        this.props.history.push('/');  
    })
    .catch(err => {
        this.setState({
            errors: err.response.data, 
            loading: false
        })
    })
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes} = this.props;
    const { errors, loading } = this.state;
    return (
      <div>
        <div className="login-container">
          <img src={AppIcon} alt="monkey" />
          <h4>Login</h4>
          <form noValidate className="login-form " onSubmit={this.handleSubmit}>
            <input
              className="form-control border-bottom"
              type="text"
              placeholder="Email"
              id="email"
              name="email"
              type="email"
              label="Email"
              // className={classes.textField}
              small={errors.email} 
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <input
              className="form-control border-bottom"
              type="text"
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              label="Password"
              //   className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            {/* {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )} */}
            <button type="submit" class="btn btn-secondary">
              {" "}
              Login{" "}
            </button>
            {/* <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
            >
              SignUp
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button> */}

            <h6>
            dont have an account ? sign up <Link to="/signup">here</Link>
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
  
//   const mapActionsToProps = {
//     loginUser
//   };

export default login;

//   export default connect(mapStateToProps,{ signupUser })(signup);
