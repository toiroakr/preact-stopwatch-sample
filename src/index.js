import React, { h, render } from 'preact';
import Stopwatch from './components/stopwatch/stopwatch';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Store from './store';
import { Provider } from 'preact-redux';

const StoreInstance = Store();

render(
  <Provider store={StoreInstance}>
    <Stopwatch />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
