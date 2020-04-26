import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reducers from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleWare = applyMiddleware(
  ReduxThunk, logger
)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
