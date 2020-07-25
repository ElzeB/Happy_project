import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.css";

import ProfileSkeleton from "../../util/ProfileSkeleton";

// // MUI stuff
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import MuiLink from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// // Icons
// import LocationOn from '@material-ui/icons/LocationOn';
// import LinkIcon from '@material-ui/icons/Link';
// import CalendarToday from '@material-ui/icons/CalendarToday';
// import EditIcon from '@material-ui/icons/Edit';
// import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
//Redux
import { connect } from "react-redux";
import { logoutUser, uploadImage } from "../../redux/actions/userActions";

const styles = (theme) => ({
  ...theme,
});

class Profile extends Component {
  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    this.props.uploadImage(formData);
  };
  handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };
  handleLogout = () => {
    this.props.logoutUser();
  };
  render() {
    const {
      user: {
        credentials: { handle, createdAt, imageUrl, bio, website, location },
        loading,
        authenticated,
      },
    } = this.props;

    let profileMarkup = 
      authenticated ? (
        <div className="user-info">
           <div className="user-handle">@{handle}</div>
            <div className="image-wrapper">
              <img src={imageUrl} alt="profile" className="profile-image" onClick={this.handleEditPicture} />
              <input
                type="file"
                id="imageInput"
                hidden="hidden"
                onChange={this.handleImageChange}
              />
            </div>
           
            {/* <button tip="Logout" onClick={this.handleLogout}></button> */}
        </div>
      ) : (
      <Link to = "/login" />
    )   

    return profileMarkup;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = { logoutUser, uploadImage };

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(Profile);
