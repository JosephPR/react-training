import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home/home'
import About from './components/About/about'
import Custom from './components/Custom/custom'
import Clock from './components/Clock/Clock'
import Pokemon from './components/Pokemon/pokemon'

export default class App extends Component {


  render() {

  return (
    <Router>
      <div className="App">
        <header>
          <Clock />
          <Link className="link" to="/">Home</Link>

          <Link className="link" to="/about">About</Link>

          <Link className="link" to="/topics">Topics</Link>

          <Link className="link" to="/custom">Custom</Link>

          <Link className="link" to="/pokemon">Pokemon</Link>

        </header>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/custom" component={Custom} />
        <Route path="/pokemon" component={Pokemon} />
      </div>
    </Router>
  );
  }
}


const Topics = ({ match }) => {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}
