// https://jacekjeznach.com/
import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
// assets
import './App.css'
// components
import NavigationIcons from './components/navigation/NavigationIcons'
import SocialIcons from './components/navigation/SocialIcons'
import HomeIcon from './components/navigation/HomeIcon'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import MyWork from './components/MyWork'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <div id="portfolio-navbar">
              <HomeIcon />
              <NavigationIcons />
              <SocialIcons />
            </div>
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
