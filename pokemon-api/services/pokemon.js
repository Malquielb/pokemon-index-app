const fetch = require('node-fetch');

const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon';


/* Getting all pokemon list */

async function getPokemonList() {
    return fetch(pokeApiUrl)
        .then(response => response.json())
        .then(json => json.count)
        .then(pokemonCount => fetch(`${pokeApiUrl}?offset=0&limit=${pokemonCount}`))
        .then(response => response.json())
        .then(json => json.results.map((pokemon) => ({ name: pokemon.name })))
        .catch(err => console.error(err));
}


/* Getting pokemon data */

function getPokemonData(pokemonName) {
    return fetch(`${pokeApiUrl}/${pokemonName}`)
        .then(response => response.json())
        .then(json => json)
        .catch(err => console.error(err));
}


exports.getPokemonList = getPokemonList; 
exports.getPokemonData = getPokemonData;