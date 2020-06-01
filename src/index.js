import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import configureStore from './store/configureStore';

import App from './App';
import List from './List';
import Detail from './Detail';
import Error from './Error';

const store = configureStore(window.__REDUX_STATE__ || {});

const AppBundle = (
  <ReduxProvider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/tum-liste" component={List} />
        <Route path="/pizza/:id" component={Detail} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  </ReduxProvider>
);

ReactDOM.render(
  AppBundle,
  document.getElementById('root'),
);
