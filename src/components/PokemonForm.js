import React, { Component } from 'react'
import axios from 'axios'

class PokemonForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.pokemon.title,
            body: this.props.pokemon.body
        }
    }

    handleInput = (e) => {
        this.props.resetNotification()
        this.setState({[e.target.name]: e.target.value})
    }

    handleBlur = () => {
        const pokemon = {title: this.state.title, body: this.state.body }
        axios.put(
            `http://localhost:3001/api/v1/pokemons/${this.props.pokemon.id}`,
            {pokemon: pokemon}
        )
            .then(response => {
                console.log(response)
                this.props.updatePokemon(response.data)
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="tile">
                <form onBlur={this.handleBlur} >
                    <input className='input' type="text" name="title" placeholder='Enter a Name'
                           value={this.state.title} onChange={this.handleInput}
                           ref={this.props.titleRef} />
                    <textarea className='input' name="body" placeholder='Describe your pokemon action'
                              value={this.state.body} onChange={this.handleInput}></textarea>
                </form>
            </div>
        );
    }
}

export default PokemonForm
