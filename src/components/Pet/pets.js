import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dog from '../../components/Dog/dog'
import Cat from '../../components/Cat/cat'
import Exotic from '../../components/Exotic/exotic'
import './pets.css'

export default function Pet () {
  return (
    <Router>
<div>

  <Link className='pet-link' to="/dogs">Dogs</Link>
  <Link className='pet-link' to="/cats">Cats</Link>
  <Link className='pet-link' to="/exotics">Exotic</Link>

          <Route  exact path="/" component={Pet} />
          <Route  path="/dogs" component={Dog} />
          <Route  path="/cats" component={Cat} />
          <Route  path="/exotics" component={Exotic} />
</div>
          <div className="images">
            <h1>Pet Specs</h1>
            <h3>Own a pet and know what your getting yourself into before you commit!<br /> Do you think ferrets are cute? well hopefully your ok with the smell and the relentless love.<br /> Or maybe you want Monkey? whatever your pet of choice we want you to know about them.</h3>

          <img src="https://static.boredpanda.com/blog/wp-content/uploads/2015/09/unusual-animal-friendships-cute-gifs-15__605.gif" alt="goatandlemur"/>
          <img src="https://static.boredpanda.com/blog/wp-content/uploads/2015/09/unusual-animal-friendships-cute-gifs-11__605.gif" alt="doganddolphin"/>
          <img src="https://i.pinimg.com/originals/7c/fe/38/7cfe38acf84d20960b036d1add5d447f.gif" alt="doganddolphin"/> <br />
          <img src="https://static.boredpanda.com/blog/wp-content/uploads/2015/09/unusual-animal-friendships-cute-gifs-9__605.gif" alt="doganddolphin"/>
          <img src="https://static.boredpanda.com/blog/wp-content/uploads/2015/09/unusual-animal-friendships-cute-gifs-3__605.gif" alt="doganddolphin"/>
          <img src="https://static.boredpanda.com/blog/wp-content/uploads/2015/09/unusual-animal-friendships-cute-gifs-8__605.gif" alt="doganddolphin"/>
          </div>

    </Router>
  )
}
