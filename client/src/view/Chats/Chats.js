import React, { Component } from 'react'
import './Chats.scss'
import one from 'assets/mock/1.jpg'
import two from 'assets/mock/2.jpg'
import three from 'assets/mock/3.jpg'
import chotury from 'assets/mock/4.jpg'

import { ChatMin, ChatMax } from 'components'

class Chats extends Component {
  render() {
    return (
      <section className="chats-section">
        <div className="chats">
          <div className="chats-header">
            <div className="chats-settings">
              <i className="fas fa-bars"></i>
            </div>
            <input className="chats-search" type="text" placeholder="Search" />
          </div>
          <div className="chats-list">
            <ChatMin img={one} name="Rhino" active="true" />
            <ChatMin img={two} name="Vulture" />
            <ChatMin img={three} name="Electro" />
            <ChatMin img={chotury} name="Green Goblin" />
          </div>
        </div>
        <div className="chat">
          <ChatMax name="Rhino" />
        </div>
      </section>
    )
  }
}

export default Chats
{
  /*ChatMin onclick render ChatMax*/
}
