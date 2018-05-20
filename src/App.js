import React, { Component } from 'react'
import './App.css'
import PokemonsContainer from './components/PokemonsContainer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Pokemon Lineup</h1>
                </div>
                <PokemonsContainer />
            </div>
        );
    }
}

export default App
