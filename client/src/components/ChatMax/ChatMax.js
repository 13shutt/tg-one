import React from 'react'
import './ChatMax.scss'

const ChatMax = (props) => (
  <div className="chatMax">
    <div className="chatMax-header">
      <div className="chatMax-header-user">
        <div>{props.name}</div>
        <span>online (or not)</span>
      </div>
      <div className="chatMax-header-info">
        <div>
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
        <div>
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div className="chatMax-main"></div>
    <div className="chatMax-footer">
      <input type="text" placeholder="Write a message..."/>
      <div>
        <i class="fa fa-rocket" aria-hidden="true"></i>
      </div>
    </div>
  </div>
)
export default ChatMax
