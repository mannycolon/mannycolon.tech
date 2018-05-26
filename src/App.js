// https://jacekjeznach.com/
import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
// assets
import './App.css'
// components
import Navigation from './components/Navigation'
import Home from './components/Home/index'
import About from './components/About/index'
import Skills from './components/Skills/index'
import MyWork from './components/MyWork/index'
import Contact from './components/Contact/index'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: 'var(--red-color)',
  },
});

console.log('Changes-3');

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Navigation />
            <div id="portfolio-body">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/skills" component={Skills}/>
              <Route exact path="/mywork" component={MyWork}/>
              <Route path="/contact" component={Contact}/>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
