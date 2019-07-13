import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullRoster from './fullRoster'
import Player from './player'
import '../../App.css'

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Switch>
    <div className="players">
    <Route exact path='/training' component={FullRoster}/>
    <Route path='/training/:number' component={Player}/>
    </div>
  </Switch>
)


export default Roster
