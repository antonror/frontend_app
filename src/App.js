import React, { Component } from 'react';
import './App.css';
import PokemonsContainer from './components/PokemonsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pokemon Dashboard</h1>
        </header>
        <PokemonsContainer />
      </div>
    );
  }
}

export default App;
