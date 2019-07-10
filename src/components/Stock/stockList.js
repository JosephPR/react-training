import React from 'react';
import './stock-list.css'

const StockList = (props) => {
  return (<div className="card-list" >{props.children}</div>)
};

export default StockList
