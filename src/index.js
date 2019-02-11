import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createStore from './store/creatStore';
import createBrowserHistory from 'history/createBrowserHistory';
//import PropTypes from 'prop-types';

import './index.css';
import App from './App'

const history = createBrowserHistory();
const store = createStore(history);

function handleChange(){
  console.log(store.getState())
}
store.subscribe(handleChange);

render (
  <App history={history} store={store}/>,
  document.getElementById('root')
);
