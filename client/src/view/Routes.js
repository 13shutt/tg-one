import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Route, Switch, Redirect } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import Login from './Login'
import Chats from './Chats'

@inject('auth')
@observer
export default class Routes extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>tg-one</title>
        </Helmet>

        <Switch>
          <Redirect exact from="/" to="login" />
          <Route exact path="/login" component={Login}>
            {this.props.auth.authenticated ? <Redirect exact to="/chats" /> : null}
          </Route>
          <Route exact path="/chats" component={Chats} />
        </Switch>
      </>
    )
  }
}
