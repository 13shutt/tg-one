import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Route, Switch } from 'react-router-dom'
import { Header } from 'components'
import Login from './Login'

import api from 'api/index'

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

        <Header />

        {api()}

        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </>
    )
  }
}
