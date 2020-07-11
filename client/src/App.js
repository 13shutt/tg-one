import React from 'react'
import { Provider } from 'mobx-react'
import { createBrowserHistory } from 'history'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { Router } from 'react-router-dom'
import 'styles/main.scss'

import Routes from 'view'

const browserHistory = createBrowserHistory()
const routingStore = new RouterStore()

const stores = {
  routing: routingStore,
}

const history = syncHistoryWithStore(browserHistory, routingStore)

const App = () => (
  <Provider {...stores}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
)

export default App
