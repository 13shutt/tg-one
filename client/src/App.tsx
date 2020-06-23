import React from 'react';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router-dom';
import Wrapper from './Wrapper';
import ResetStyles from './styles/resetStyles';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  routing: routingStore,
};

const history = syncHistoryWithStore(browserHistory, routingStore);

const App: React.FC = () => (
  <Provider {...stores}>
    <Router history={history}>
      <ResetStyles />
      <Wrapper />
    </Router>
  </Provider>
);

export default App;
