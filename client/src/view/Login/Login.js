import React, { Component } from 'react'
import { Input, Button } from 'components'
import './Login.scss'

export default class Login extends Component {
  render() {
    return (
      <section className="login-section">
        <div className="login-wrapper">
          <div className="login-row">
            <div className="login-title">Login</div>
            <div className="login-buttons">
              <Button name="Next" />
            </div>
          </div>
          <div className="login-fields">
            <Input name="name" type="input" />
            <Input name="password" type="password" />
          </div>
        </div>
      </section>
    )
  }
}
