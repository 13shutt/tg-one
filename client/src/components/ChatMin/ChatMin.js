import React from 'react'
import './ChatMin.scss'

const ChatMin = (props) => (
  <div className="chatMin">
    <img src={props.img} alt="logo" />
    <div>{props.name}</div>
  </div>
)
export default ChatMin
