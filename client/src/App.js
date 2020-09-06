import React from 'react'
import { Provider } from 'mobx-react'
import { Router } from 'react-router-dom'
import { history } from 'stores/routing'
import { stores } from 'stores'
import 'styles/main.scss'

import Routes from 'view'

const App = () => (
  <Provider {...stores}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
)

export default App
