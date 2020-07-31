import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import axios from 'axios';
import './index.css';

import Scream from '../../components/Scream';
import { getScream } from '../../redux/actions/dataActions';
import Progress from '../../components/ProgressBar/index.js';

class openScream extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scream: {},
            firstImage: {}
        }
    }
    
    componentDidMount(){
        axios
        .get('/screams/:screamId')
        .then (res => {
            console.log(res.data);
            this.setState({
                scream: res.data,
                firstImage: res.data
            }) 
        })
        .catch(err => console.log(err));
    }

    render() {
        
        return (
            <div>
                <Progress done="100"/>
                <div className="container-fluid">
                    <div className="row no-gutters">
                        <h1>Help</h1>    
                        <img src={this.state.firstImage} />
                    </div>
                </div>
            </div>
        )
    }
}

openScream.propTypes = {
    classes: PropTypes.object.isRequired,
    getScream: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    user: state.user
  });
  
  const mapActionsToProps = {
    getScream
  };

export default connect(mapStateToProps, mapActionsToProps)(openScream);
