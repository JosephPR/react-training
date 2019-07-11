import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dog from '../../components/Dog/dog'
import Cat from '../../components/Cat/cat'
import Exotic from '../../components/Exotic/exotic'
import './pets.css'

export default function Pet () {
  return (
    <Router>
{/*<h1>HELLLOOOOOOOOOOOO</h1>*/}
    <Link className='pet-link' to="/dogs">Dogs</Link>
    <Link className='pet-link' to="/cats">Cats</Link>
    <Link className='pet-link' to="/exotics">Exotic</Link>


            <Route exact path="/dogs" component={Dog} />
            <Route exact path="/cats" component={Cat} />
            <Route exact path="/exotics" component={Exotic} />
    </Router>
  )
}
