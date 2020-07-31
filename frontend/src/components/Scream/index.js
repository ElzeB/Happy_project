import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import "./index.css";

class Scream extends Component {
  
    render() {
      const {
        scream : { 
            body,
            hoverBody,
            createdAt, 
            userImage, 
            userHandle, 
            screamId, 
            likeCount, 
            commentCount,
            firstImage
        } 
    } = this.props;

        return (
          <Link 
            // to="/openScream"
            to={`/scream/${screamId}`}
            className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
          >
            <div className="hovereffect">
              <img alt="avocado" src={firstImage} />
              <a className="overlay">
                <div className="info">{hoverBody}</div>
              </a>
            </div>
          </Link>
        );
    }
}

Scream.propTypes = {
    user: PropTypes.object.isRequired,
    screamId: PropTypes.object.isRequired,
    firstImage: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(Scream);
