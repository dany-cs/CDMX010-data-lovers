import data from './data/pokemon/pokemon.js';

export function datapokemon() {
  var poke = data.pokemon.filter(function (datakanto) {
    return datakanto.generation.name === 'kanto';
  })
  return poke;
}

export function datapokemonj() {
  var poke2 = data.pokemon.filter(function (datajohto) {
    return datajohto.generation.name === 'johto';
  })
  return poke2;
}

/*export function FiltradoDosABC() {
  var ABC2 = data.poke2.filter(function (datajothoFABC) {
    if 
    return datajothoFABC.element.name === '';
  })
  return poke;*/