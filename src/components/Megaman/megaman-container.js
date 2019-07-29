import React from 'react';
import MegamanItem from './megaman-item'
import './megaman.css'

export default function MegamanContainer (props) {
  const bosses = props.bosses.map((boss) => {
    return <MegamanItem
            key={boss.id}
            name={boss.name}
            sprite1={boss.sprite1}
            weapon={boss.weapon}
            weakness={boss.weakness}
    />
  })
  return (
    <>
    <div className="megaman-card-list">{bosses}</div>
    </>
  )
}
