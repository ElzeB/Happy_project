import React, { Component } from 'react';
import Scream from '../../components/Scream';
import Progress from '../../components/ProgressBar/index.js';
import axios from 'axios';
import './index.css';

class home extends Component {
    state = {
        screams: null
    };
    componentDidMount(){
        axios
        .get('/screams') 
        .then (res => {
            // console.log(res.data);
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
            <div>
                <Progress done="100"/>
                <div className="container-fluid">
                    <div className="row no-gutters">
                        {recentScreamsMarkup}
                    </div>
                </div>
            </div>
        )
    }
}

export default home;
