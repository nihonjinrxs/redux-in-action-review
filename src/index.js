import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'redux';
import tasks from './reducers'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(tasks)

ReactDOM.render(
  <Provider store={store}> //#B
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
