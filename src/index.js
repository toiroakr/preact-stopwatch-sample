import { h, render } from 'preact';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Store from './store';
import { Provider } from 'preact-redux';

const StoreInstance = Store();

render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
