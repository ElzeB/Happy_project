import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
//Component
import Navbar from './components/Navbar/index.js';

//Pages
import home from './pages/home';
import login from './pages/login/index.js';
import signup from './pages/signup/index.js';
import user from './pages/user';

//Components
// import AuthRoute from './util/AuthRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
         <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/signup" component={signup} />
              <Route exact path="/login" component={login} />
              {/* 
              <AuthRoute exact path="/signup" component={signup} /> */}
              {/* <Route exact path="/users/:handle" component={user} />
              <Route
                exact
                path="/users/:handle/scream/:screamId"
                component={user}
              /> */}
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
