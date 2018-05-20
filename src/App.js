import React, { Component } from 'react'
import './App.css'
import PokemonsContainer from './components/PokemonsContainer'
import PokemonLineup from './components/PokemonLineup'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Welcome to Pokemon Dashboard</h1>
                </div>

                <div className="main-wrap">
                    <div className="poke-lineup">
                        <div className="component-header"><h2>Pokemon Lineup</h2></div>
                        <PokemonLineup />
                    </div>

                    <div className="poke-dex">
                        <div className="component-header"><h2>Pokedex Area</h2></div>
                        <PokemonsContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default App
