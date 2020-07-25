import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="hovereffect">
                    <img alt="avocado" src={firstImage} /><a className="overlay">
                    <div class="info">
                        <Link to = {`/content/{screamId}`}>
						    {hoverBody}
                        </Link>
					</div></a>
                 </div>
             </div>
        )
    }
}

export default Scream;
