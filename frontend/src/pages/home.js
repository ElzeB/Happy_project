import React, { Component } from 'react';
import axios from 'axios';

import Scream from '../components/Scream/index.js';

class home extends Component {
    state = {
        screams: null
    };
    componentDidMount(){
        axios
        .get('/screams') 
        .then (res => {
            console.log(res.data);
            this.setState({
                screams: res.data
            });
        })
        .catch(err => console.log(err));
    }
    render() {
        let recentScreamsMarkup = this.state.screams ? (
            this.state.screams.map(scream => <Scream scream={scream} />)
        ) :  <p>Loading...</p>
        return (
            <div className="container-fluid">
                <div class="row no-gutters">
                    {recentScreamsMarkup}
                </div>
            </div>
            // <Grid container>
            //     <Grid container item sm={8} xs={8}>
            //         <Grid item sm={4} xs={6}>
            //             {recentScreamsMarkup}
            //         </Grid>
                    /* <Grid item sm={4} xs={6}>
                        <p>Content....</p>
                    </Grid>
                    <Grid item sm={4} xs={6}>
                        <p>Content....</p>
                    </Grid>
                    <Grid item sm={4} xs={6}>
                        <p>Content....</p>
                    </Grid> */
            //     </Grid>
            //     <Grid item sm={4} xs={4}>
            //         <p>Profile....</p>
            //     </Grid>
            // </Grid>
        )
    }
}

export default home;
