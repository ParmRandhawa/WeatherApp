import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;