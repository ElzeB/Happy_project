import React, { Component } from 'react';
import "./index.css";

class Scream extends Component {
    render() {
        const { 
            classes, 
            scream : { 
                body, 
                createdAt, 
                userImage, 
                userHandle, 
                screamId, 
                likeCount, 
                commentCount
            } 
        } = this.props;
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                {/* <div className="hovereffect"> */}
                    <img alt="avocado" image={userImage} />
                 {/* </div> */}
             </div>
             // <Card className={classes.card}>
            //     <CardMedia  */}
            //     image={userImage}
            //     title="Profile image" 
            //     className={classes.image}/> 
            //     <CardContent className={classes.content}>
            //         <Typography variant="h5">{userHandle}</Typography>
            //         <Typography variant="body2" color="textSecondary">{createdAt}</Typography>
            //         <Typography variant="body1">{body}</Typography>
            //     </CardContent>
            // </Card>
        )
    }
}

export default Scream;
