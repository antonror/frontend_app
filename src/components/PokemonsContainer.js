import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'
import Pokemon from './Pokemon'
import PokemonForm from './PokemonForm'

class PokemonsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemons: [],
            editingPokemonId: null,
            notification: '',
            transitionIn: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/pokemons.json')
            .then(response => {
                console.log(response)
                this.setState({pokemons: response.data})
            })
            .catch(error => console.log(error))
    }

    addNewPokemon = () => {
        axios.post('http://localhost:3001/api/v1/pokemons', {pokemon: {title: '', body: ''}})
            .then(response => {
                const pokemons = update(this.state.pokemons, { $splice: [[0, 0, response.data]]})
                this.setState({pokemons: pokemons, editingPokemonId: response.data.id})
            })
            .catch(error => console.log(error))
    }

    updatePokemon = (pokemon) => {
        const pokemonIndex = this.state.pokemons.findIndex(x => x.id === pokemon.id)
        const pokemons = update(this.state.pokemons, {[pokemonIndex]: { $set: pokemon }})
        this.setState({pokemons: pokemons, notification: 'All changes saved', transitionIn: true})
    }

    resetNotification = () => {this.setState({notification: '', transitionIn: false})}

    enableEditing = (id) => {
        this.setState({editingPokemonid: id}, () => { this.title.focus() })
    }



    render() {
        return (
            <div>
                <div>
                    <button className="newPokemonButton"
                        onClick={this.addNewPokemon}>
                        Add Pokemon
                    </button>
                </div>
                {this.state.pokemons.map((pokemon) => {
                    if(this.state.editingPokemonId === pokemon.id) {
                        return(<PokemonForm pokemon={pokemon} key={pokemon.id}
                                updatePokemon = {this.updatePokemon}
                                titleRef= {input => this.title = input}
                                resetNotification={this.resetNotification}
                        />)
                    } else {
                        return (<Pokemon pokemon={pokemon} key={pokemon.id} />)
                    }
                })}
            </div>
        )
    }
}

export default PokemonsContainer
