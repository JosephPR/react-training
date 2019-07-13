import React from 'react'
import LanguageAPI from '../../api'
import { Link } from 'react-router-dom'


// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullRoster = () => (
  <div>
    <ul>
      {
        LanguageAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/training/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullRoster
