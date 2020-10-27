import React, { Component, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { Route, Switch, Redirect } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import Loader from 'react-loader-spinner'

const Login = React.lazy(() => import('./Login'))
const Chats = React.lazy(() => import('./Chats'))

@inject('auth')
@inject('routing')
@observer
export default class Routes extends Component {
  render() {
    {console.log(this.props)}
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>tg-one</title>
        </Helmet>

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Redirect exact from="/" to="login" />
            <Route exact path="/login" component={Login}>
              {this.props.auth.authenticated && <Redirect exact to="/chats" />}
            </Route>
            <Route exact path="/chats" component={Chats} />
          </Switch>
        </Suspense>
      </>
    )
  }
}
