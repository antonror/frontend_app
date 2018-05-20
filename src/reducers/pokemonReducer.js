import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function pokemonReducer(state = initialState.pokemons, action) {
    switch(action.type) {
        case types.LOAD_POKEMONS_SUCCESS:
            return action.pokemons
        default:
            return state;
    }
}
