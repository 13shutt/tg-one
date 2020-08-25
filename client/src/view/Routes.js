import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Route, Switch } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import Login from './Login'
import Chats from './Chats'

import api from 'api/index'

@inject('routing')
@observer
export default class Routes extends Component {
  componentDidMount() {
    console.log('cdm')
  }
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>tg-one</title>
        </Helmet>

        {api()}

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/chats" component={Chats} />
        </Switch>
      </>
    )
  }
}
