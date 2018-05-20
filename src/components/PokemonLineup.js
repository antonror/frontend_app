import React, { Component } from 'react'
import axios from 'axios'

class PokemonLineup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemons: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/pokemons')
            .then(response => {
                this.setState({pokemons: response.data})
            })
            .catch(error => console.log(error))
    }

    render() {
        {
            return (
                <div>
                    {this.state.pokemons.map((pokemon) => {
                        return(
                            <div className="tile" key={pokemon.id} >
                                <h4>{pokemon.title}</h4>
                                <p>{pokemon.body}</p>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
}

export default PokemonLineup