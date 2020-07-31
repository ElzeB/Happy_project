import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
//Redux 
import {Provider} from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';

//Component
import Navbar from './components/Navbar/index.js';
import AuthRoute from './util/AuthRoute';

//Pages
import home from './pages/Home';
import login from './pages/login/index.js';
import signup from './pages/signup/index.js';
import openScream from './pages/openScream/index.js'

const token = localStorage.FBIdToken;
if(token) {
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()){
    store.dispatch(logoutUser())
    window.location.href = '/login'
  } else {
    store.dispatch({ type:SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
         <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <AuthRoute exact path="/signup" component={signup} />
              <AuthRoute exact path="/login" component={login} />
              <Route exact path="/scream/:screamId" component={openScream} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );  
  }
}

export default App;
