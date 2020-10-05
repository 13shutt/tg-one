import React, { Component } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import { inject, observer } from 'mobx-react'
import './UserModal.scss'

@inject('auth')
@observer
class UserModal extends Component {
  render() {
    let user = this.props.auth.user.data.user
    return (
      <section className="modal-section">
        <OutsideClickHandler onOutsideClick={this.props.closeModal}>
          <div className="modal">
            <div className="modal-title">
              {user.firstName} {user.lastName}
            </div>
            <div className="modal-id">{user._id}</div>
            <div className="modal-img">
              <img src={`http://localhost:5000/${user.image}`} />
            </div>
            <div className="modal-username">{user.username}</div>
          </div>
        </OutsideClickHandler>
      </section>
    )
  }
}

export default UserModal
