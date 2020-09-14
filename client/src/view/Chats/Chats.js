import React, { Component } from 'react'
import './Chats.scss'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import SearchBar from 'view/SearchBar'
import UserModal from 'view/UserModal'
import one from 'assets/mock/1.jpg'
import two from 'assets/mock/2.jpg'
import three from 'assets/mock/3.jpg'
import chotury from 'assets/mock/4.jpg'

import { ChatMin, ChatMax, Search } from 'components'

@observer
class Chats extends Component {
  @observable searchInput = ''
  @observable modal = false

  handleSearchInput = (e) => {
    this.searchInput = e.target.value
  }

  openModal = () => {
    this.modal = true
  }

  closeModal = () => {
    this.modal = false
  }

  render() {
    return (
      <section className="chats-section">
        <div className="chats">
          <div className="chats-header">
            <div className="chats-settings" onClick={this.openModal}>
              <i className="fas fa-bars"></i>
            </div>
            <Search
              placeholder="Search"
              value={this.searchInput}
              onChange={this.handleSearchInput}
            />
          </div>
          {this.searchInput == '' ? (
            <div className="chats-list">
              <ChatMin img={one} name="Rhino" active="true" />
              <ChatMin img={two} name="Vulture" />
              <ChatMin img={three} name="Electro" />
              <ChatMin img={chotury} name="Green Goblin" />
            </div>
          ) : (
            <SearchBar />
          )}
        </div>
        <div className="chat">
          <ChatMax name="Rhino" />
        </div>
        {this.modal && <UserModal closeModal={this.closeModal} />}
      </section>
    )
  }
}

export default Chats
{
  /*ChatMin onclick render ChatMax*/
}
