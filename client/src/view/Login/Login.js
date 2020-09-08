import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { Header, Input, Button } from 'components'
import './Login.scss'

import API from 'api/index'

const api = new API()

@observer
class Login extends Component {
  @observable name = ''
  @observable password = ''

  handleInputName = (e) => {
    this.name = e
  }

  handleInputPass = (e) => {
    this.password = e
  }

  handleFormSubmit = () => {
    api.getToken(this.name, this.password)
  }

  render() {
    return (
      <>
        <Header />
        <section className="login-section">
          <div className="login-wrapper">
            <div className="login-row">
              <div className="login-title">Login</div>
              <div className="login-buttons">
                <Button name="Next" onClick={this.handleFormSubmit} />
              </div>
            </div>
            <div className="login-fields">
              <Input
                name="name"
                type="input"
                value={this.name}
                handleChange={this.handleInputName}
              />
              <Input
                name="password"
                type="password"
                value={this.password}
                handleChange={this.handleInputPass}
              />
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Login
