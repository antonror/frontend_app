class pokemonApi {
    static getAllPokemons() {
        return fetch('http://localhost:3001/api/v1/pokemons').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default pokemonApi