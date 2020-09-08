import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Route, Switch } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import Login from './Login'
import Chats from './Chats'

import API from 'api/index'

const api = new API()

// @inject('routing')
// @observer
export default class Routes extends Component {
  // componentDidMount() {
  //   console.log('cdm')
  // }
  render() {
    // const { location } = this.props.routing
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>tg-one</title>
        </Helmet>

        {/* {console.log(location, 'state')} */}

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/chats" component={Chats} />
        </Switch>
      </>
    )
  }
}
