import React from 'react'
import '../../App.css'


const Search = (props) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={props.onChange}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
