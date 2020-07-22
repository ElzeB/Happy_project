import React, { Component } from "react";
import PropTypes from "prop-types";
import AppIcon from "../../images/icon.png";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./index.css";

// import { connect } from 'react-redux';
// import { signupUser } from '../redux/actions/userActions';

class signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      handle: "",
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
      loading: true,
    });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle,
    };
    axios.post('/signup', newUserData)
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
    // this.props.signupUser(newUserData, this.props.history);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;
    const { errors, loading } = this.state;
    return (
      <div>
        <div className="signup-container">
          <img src={AppIcon} alt="monkey" />
          <h4>Sign Up</h4>
          <form noValidate className="signup-form " onSubmit={this.handleSubmit}>
            <input
              className="form-control border-bottom"
              type="text"
              placeholder="Email"
              id="email"
              name="email"
              type="email"
              label="Email"
              // className={classes.textField}
              helperText={errors.email}
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
            <input
              className="form-control border-bottom"
              type="text"
              placeholder="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              //   className={classes.textField}
              helperText={errors.confirmPassword}
              error={errors.confirmPassword ? true : false}
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              fullWidth
            />
            <input
              className="form-control border-bottom"
              type="text"
              placeholder="Handle"
              id="handle"
              name="handle"
              type="text"
              label="Handle"
              //   className={classes.textField}
              helperText={errors.handle}
              error={errors.handle ? true : false}
              value={this.state.handle}
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
              SignUp{" "}
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
              Already have an account ? Login <Link to="/login">here</Link>
            </h6>
          </form>
        </div>
      </div>
    );
  }
}

signup.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});



export default signup;

//   export default connect(mapStateToProps,{ signupUser })(signup);
