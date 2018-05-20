import React, { Component } from 'react'
import './App.css'
import PokemonsContainer from './components/PokemonsContainer'
import PokemonSearch from './components/PokemonSearch'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Welcome to Pokemon Dashboard</h1>
                </div>
                <PokemonSearch />
                <div className="poke-lineup">
                    <div className="component-header"><h2>Pokemon Lineup</h2></div>
                </div>
                <div className="poke-dex">
                    <PokemonsContainer />
                </div>
            </div>
        );
    }
}

export default App
