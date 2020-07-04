import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Route, Switch } from 'react-router-dom'
import { Header } from 'components'

import 'styles/fonts.scss'

const Random = () => <div>Works!</div>

export default class Routes extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>tg-one</title>
        </Helmet>

        <Header />

        <Switch>
          <Route exact path="/" component={Random} />
        </Switch>
      </>
    )
  }
}
