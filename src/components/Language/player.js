import React from 'react'
import LanguageAPI from '../../api'
import { Link } from 'react-router-dom'


// The Player looks up the language using the number parsed from
// the URL's pathname. If no language is found with the given
// number, then a "language not found" message is displayed.
const Player = (props) => {
  const language = LanguageAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!language) {
    return <div>Sorry, but the language was not found</div>
  }
  return (
    <div>
      <h1>{language.name}</h1>
      <h4> {language.info}</h4>
      <Link to='/training'>Back</Link>
    </div>
  )
}

export default Player
