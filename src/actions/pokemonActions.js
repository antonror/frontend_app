import * as types from './actionTypes';
import pokemonApi from '../api/pokemonApi';

export function loadPokemons() {
    return function (dispatch) {
        return pokemonApi.getAllPokemons().then(pokemons => {
            dispatch(loadPokemonsSuccess(pokemons));
        }).catch(error => {
            throw(error);
        });
    }
}

export function loadPokemonsSuccess(pokemons) {
    return {type: types.LOAD_POKEMONS_SUCCESS, pokemons};
}
