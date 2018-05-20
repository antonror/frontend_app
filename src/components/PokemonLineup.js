import React from 'react';
import {connect} from 'react-redux';

class PokemonLineup extends React.Component {
    render() {
        return (
            <div>
                {this.props.pokemons.map((pokemon) => {
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


function mapStateToProps(state, ownProps) {
    return {
        pokemons: state.pokemons
    };
}

export default connect(mapStateToProps)(PokemonLineup)