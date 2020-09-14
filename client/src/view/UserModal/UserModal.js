import React, { Component } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import './UserModal.scss'

class UserModal extends Component {
  render() {
    return (
      <section className="modal-section">
        <OutsideClickHandler onOutsideClick={this.props.closeModal}>
          <div className="modal">
            <div className="modal-header">this is modal header</div>
          </div>
        </OutsideClickHandler>
      </section>
    )
  }
}

export default UserModal
