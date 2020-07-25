import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import NoImg from '../images/no-img.png';


const ProfileSkeleton = (props) => {
  const { classes } = props;
  return (
    <div >
      <div >
        <div className="image-wrapper">
          <img src={NoImg} alt="profile" className="profile-image" />
        </div>
        <hr />
        <div className="profile-details">
          <div />
          <hr />
          <div />
          <div />
          <hr />
        </div>
      </div>
    </div>
  );
};

ProfileSkeleton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default ProfileSkeleton;