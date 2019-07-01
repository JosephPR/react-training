import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home/home'
import About from './components/About/about'
import Custom from './components/Custom/custom'
import Clock from './components/Clock/Clock'
import Pokemon from './components/Pokemon/pokemon'
import Roster from './components/Roster/roster'

export default class App extends Component {


  render() {

  return (
    <Router>
      <div className="App">
        <header className="header">
          <Clock />
          <Link className="link" to="/">Home</Link>

          <Link className="link" to="/about">About</Link>

          <Link className="link" to="/custom">Custom</Link>

          <Link className="link" to="/pokemon">Pokemon</Link>

          <Link className="link" to="/roster">Training</Link>

        </header>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/custom" component={Custom} />
        <Route path="/pokemon" component={Pokemon} />
        <Route path="/roster" component={Roster} />
      </div>
    </Router>
  );
  }
}
