import React from 'react';
import { render } from 'react-dom';
import createStore from './store/creatStore';
import createBrowserHistory from 'history/createBrowserHistory';
//import PropTypes from 'prop-types';
import './index.css';
import App from './App'

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});
const store = createStore(history);

function handleChange(){
  console.log(store.getState())
}

render (
  <App history={history} store={store}/>,
  document.getElementById('root')
);
