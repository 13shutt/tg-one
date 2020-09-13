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
          <ChatMin key={i} name={i.username} />
          //console.log(i)
        ))}
      </>
    )
  }
}

export default SearchBar
