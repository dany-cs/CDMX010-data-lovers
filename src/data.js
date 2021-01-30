import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon

export function datapokemon() {
  let poke = pokemons.filter(function (datakanto) {
    return datakanto.generation.name === 'kanto';
  })
  return poke;
}

export function datapokemonj() {
  let poke2 = pokemons.filter(function (datajohto) {
    return datajohto.generation.name === 'johto';
  })
  return poke2
}

// [1, 2, 3, 4, 5].includes(5) // true
// [1, 2, 3, 4, 5].includes(0) // false
// ["fire", "ice", "flying", "psychic"].includes('fire') // true

export function filtrarPorDebilidad(debilidad) {
  const pokemonsFiltrados = pokemons.filter(function (pokemon) {
    return pokemon.weaknesses.includes(debilidad);
  })

  return pokemonsFiltrados;
}

/**
 * 'pikachu'[0] === 'p' // true
 * 'volbasor'.includes('vol') // true
 
export function filtrarAZ(character) {
  const pokemonsFiltrados = pokemons.filter(function(pokemon){
    return pokemon.name[0] === character
  })

  return pokemonsFiltrados;
}

const letra = document.getElementById('letra').value
filtrarAZ(letra)
filtrarAZ('a')
filtrarAZ('b')
filtrarAZ('c')*/
