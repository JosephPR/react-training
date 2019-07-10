import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { slide as Menu} from 'react-burger-menu'
import Dog from './components/Dog/dog'
import Stock from './components/Stock/stock'
import Robot from './components/Robot/robot'
import Clock from './components/Clock/Clock'
import Pokemon from './components/Pokemon/pokemon'
import Roster from './components/Roster/roster'
import Challenge from './components/Account/AccountContainer'
import Jokes from './components/Jokes/jokes'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './sidebar.css'

export default class App extends Component {


  render() {

  return (
    <Router>
      <div id="App" className="App">
        <header className="header">
          <Clock />

          <Menu  pageWrapId={"page-wrap"} outerContainerId={"App"}>
          <Link className="link" to="/"><i className='fa fa-paw'></i>Dogs</Link>

            <Link className="link" to="/stock"> Stocks</Link>

            <Link className="link" to="/robot">Robots</Link>

            <Link className="link" to="/pokemon">Pokemon</Link>

            <Link className="link" to="/roster">Training</Link>

            <Link className="link" to="/challenge">Challenge</Link>

            <Link className="link" to="/jokes">Jokes</Link>
          </Menu>
        </header>

        <hr />

        <Route exact path="/" component={Dog} />
        <Route path="/stock" component={Stock} />
        <Route path="/robot" component={Robot} />
        <Route path="/pokemon" component={Pokemon} />
        <Route path="/roster" component={Roster} />
        <Route path="/challenge" component={Challenge} />
        <Route path="/jokes" component={Jokes} />
      </div>
    </Router>
  );
  }
}
