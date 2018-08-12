import React, { Component } from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from "history";
import withRoot from './utils/withRoot';
// views
import ProfilePage from './views/ProfilePage'

// assets
import './App.css'

let hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL} history={hist}>
        <Route exact path="/" component={ProfilePage} />
      </Router>
    );
  }
}

export default withRoot(App);
