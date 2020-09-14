import React, { Component } from 'react'
import { ChatMin } from 'components'
import { inject, observer } from 'mobx-react'
import './SearchBar.scss'

@inject('chat')
@observer
class SearchBar extends Component {
  componentDidMount() {
    this.props.chat.getUsers()
  }
  render() {
    return (
      <>
        {this.props.chat.users.map((i) => (
          <ChatMin
            key={i}
            name={i.username}
            img={`http://localhost:5000/uploads/images/default.png`}
          />
        ))}
      </>
    )
  }
}

export default SearchBar
