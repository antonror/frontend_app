import React, { Component } from 'react'
import axios from 'axios'
import Pokemon from './Pokemon'
import PokemonForm from './PokemonForm'
import update from 'immutability-helper'
import Notification from './Notification'
import {loadPokemons} from '../actions/pokemonActions';

class PokemonsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
            pokemons: [],
            editingPokemonId: null,
            notification: '',
            transitionIn: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/search?q=' + this.state.term)
            .then(response => {
                this.setState({pokemons: response.data})
            })
            .catch(error => console.log(error))
    }

    getAutoCompleteResults(e){
        this.setState({
            term: e.target.value
        }, () => {
            axios.get('http://localhost:3001/search?q=' + this.state.term)
                .then(response => this.setState({pokemons: response.data }))
        })
    }

    addNewPokemon = () => {
        axios.post('http://localhost:3001/api/v1/pokemons', {pokemon: {title: '', body: ''}})
            .then(response => {
                const pokemons = update(this.state.pokemons, { $splice: [[0, 0, response.data]]})
                this.setState({pokemons: pokemons, editingPokemonId: response.data.id})
            })
            .catch(error => console.log(error))

        loadPokemons()
    }

    updatePokemon = (pokemon) => {
        const pokemonIndex = this.state.pokemons.findIndex(x => x.id === pokemon.id)
        const pokemons = update(this.state.pokemons, {[pokemonIndex]: { $set: pokemon }})
        this.setState({pokemons: pokemons, notification: 'All changes saved', transitionIn: true})
    }

    deletePokemon = (id) => {
        axios.delete(`http://localhost:3001/api/v1/pokemons/${id}`)
            .then(response => {
                const pokemonIndex = this.state.pokemons.findIndex(x => x.id === id)
                const pokemons = update(this.state.pokemons, { $splice: [[pokemonIndex, 1]]})
                this.setState({pokemons: pokemons})
            })
            .catch(error => console.log(error))
    }

    resetNotification = () => {this.setState({notification: '', transitionIn: false})}

    enableEditing = (id) => {
        this.setState({editingPokemonId: id}, () => { this.title.focus() })
    }


    render() {
        let autoCompleteList = this.state.pokemons.map((pokemon) => {
            if(this.state.editingPokemonId === pokemon.id) {
                return(<PokemonForm pokemon={pokemon}
                                    key={pokemon.id}
                                    updatePokemon={this.updatePokemon}
                                    titleRef= {input => this.title = input}
                                    resetNotification={this.resetNotification} />)
            } else {
                return (<Pokemon pokemon={pokemon}
                                 key={pokemon.id}
                                 onClick={this.enableEditing}
                                 onDelete={this.deletePokemon} />)
            }
        })

        return (
            <div>
                <button className="newPokemonButton" onClick={this.addNewPokemon} >
                    Add Pokemon
                </button>
                <Notification in={this.state.transitionIn} notification= {this.state.notification} />
                <input className="poke-search" ref="input" value={ this.state.term }
                       onChange={ this.getAutoCompleteResults.bind(this) }
                       type='text' placeholder='Search...' />
                <div>
                    { autoCompleteList }
                </div>
            </div>
        )
    }
}

export default PokemonsContainer
