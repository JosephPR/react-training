import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { slide as Menu} from 'react-burger-menu'
import Dog from './components/Dog/dog'
import Cat from './components/Cat/cat'
import Exotic from './components/Exotic/exotic'
import Pet from './components/Pet/pets'
import Stock from './components/Stock/stock'
import Robot from './components/Robot/robot'
import Clock from './components/Clock/Clock'
import Pokemon from './components/Pokemon/pokemon'
import Language from './components/Language/roster'
import Brewery from './components/Brewery/brewery'
import Beer from './components/Beer/beer'
import Megaman from './components/Megaman/megaman'
// import Challenge from './components/Account/AccountContainer'
import Jokes from './components/Jokes/jokes'
import RickAndMorty from './components/RickAndMorty/rick-and-morty'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './sidebar.css'

export default function App () {

  return (
    <Router>
      <div id="App" className="App">
        <header className="header">
          <Clock />

          <Menu  pageWrapId={"page-wrap"} outerContainerId={"App"}>
          <Link className="link" to="/"><i className='fa fa-paw'></i>Pets</Link>

            <Link className="link" to="/stocks"> Stocks</Link>

            <Link className="link" to="/robots">Robots</Link>

            <Link className="link" to="/pokemon">Pokemon</Link>

            <Link className="link" to="/jokes">Jokes</Link>

            <Link className="link" to="/rickandmorty">Rick</Link>

            <Link className="link" to="/training">Training</Link>

            <Link className="link" to="/brewery">Brewery</Link>

            <Link className="link" to="/beer">Beer</Link>

            <Link className="link" to="/megaman">Megaman</Link>


          </Menu>
        </header>

        <hr />

        <Route exact path="/" component={Pet} />
        <Route path="/dogs" component={Dog} />
        <Route path="/cats" component={Cat} />
        <Route path="/exotics" component={Exotic} />
        <Route path="/stocks" component={Stock} />
        <Route path="/robots" component={Robot} />
        <Route path="/pokemon" component={Pokemon} />
        <Route path="/training" component={Language} />
        <Route path="/jokes" component={Jokes} />
        <Route path='/rickandmorty' component={RickAndMorty} />
        <Route path='/brewery' component={Brewery} />
        <Route path='/beer' component={Beer} />
        <Route path='/megaman' component={Megaman} />
      </div>
    </Router>
  );
  }
