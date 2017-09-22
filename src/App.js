import { h, Component } from 'preact';
import logo from './logo.svg';
import './App.css';
import Stopwatch from './components/stopwatch/stopwatch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Preact</h2>
        </div>
        <Stopwatch />
      </div>
    );
  }
}

export default App;