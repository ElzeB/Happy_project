import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
//Component
import Navbar from './components/Navbar/index.js';

//Pages
import home from './pages/Home/index.js';
import login from './pages/login';
import signup from './pages/signup';
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
              {/* <AuthRoute exact path="/login" component={login} />
              <AuthRoute exact path="/signup" component={signup} /> */}
              <Route exact path="/users/:handle" component={user} />
              <Route
                exact
                path="/users/:handle/scream/:screamId"
                component={user}
              />
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
