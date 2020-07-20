import React from 'react'
import './ChatMax.scss'

const ChatMax = (props) => (
  <div className="chatMax">
    <div className="chatMax-header">
      <div className="chatMax-header-user">
        <div>{props.name}</div>
      </div>
      <div className="chatMax-header-info"></div>
    </div>
    <div className="chatMax-main"></div>
    <div className="chatMax-footer"></div>
  </div>
)
export default ChatMax
