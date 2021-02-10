//import pokemon from './data/pokemon/pokemon.js';//
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
  return poke2;
}

//funcion para acomodar de la a-z//
export function filtradoAbc() {
  let pokeK = datapokemon();
  let pokemonAz = pokeK.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
  })
  console.log(pokemonAz);
  // aqui vamos a renderizar 
  let renderTarjetasDOM = document.querySelector('.tarjetas');
  let filtrado1 = document.getElementById("filtrado1");
  filtrado1.innerHTML = "";
  renderTarjetasDOM.innerHTML = "";

  document.getElementById("pantalla3").style.display = "block";
  document.getElementById("pantalla2").style.display = "none";


  const filtrado = pokemonAz;
  filtrado.forEach(elemento => {
    let cardContainer = document.createElement('div');
        cardContainer.classList.add("tarjetaLadoA");
        let image = document.createElement('img')
        image.classList.add("muñequitos");
        let numeroPokemon = document.createElement('h1')
        numeroPokemon.classList.add("numeros");
        let nombre = document.createElement('h3')
        nombre.classList.add("nombres");
        let altura = document.createElement('h4')
        let peso = document.createElement('h4')
        let tipo = document.createElement('h4')
        let resistencia = document.createElement('p')
        resistencia.classList.add("resistencia1");
        let debilidades = document.createElement('p')
        debilidades.classList.add("debilidades1");
        let cardContainer2 = document.createElement('div')
        cardContainer2.classList.add("tarjetaLadoB")
        let info = document.createElement('h2')
        info.classList.add("ladoB")

    image.src = `${elemento.img}`
    numeroPokemon.textContent = `${elemento.num}`
    nombre.textContent = `${elemento.name}`
    altura.textContent = 'ALTURA: ' + `${elemento.size.height}`
    peso.textContent = 'PESO: ' + `${elemento.size.weight}`
    tipo.textContent = 'TIPO: ' + `${elemento.type}`
    resistencia.textContent = 'RESISTENCIA: ' + `${elemento.resistant}`
    debilidades.textContent = 'DEBILIDADES: ' + `${elemento.weaknesses}`
    info.textContent = 'Informacion: ' + `${elemento.about}`

    cardContainer.appendChild(image)
    cardContainer.appendChild(numeroPokemon)
    cardContainer.appendChild(nombre)
    cardContainer.appendChild(altura)
    cardContainer.appendChild(peso)
    cardContainer.appendChild(tipo)
    cardContainer.appendChild(resistencia)
    cardContainer.appendChild(debilidades)
    cardContainer2.appendChild(info)

    renderTarjetasDOM.appendChild(cardContainer);
    renderTarjetasDOM.appendChild(cardContainer2);


  })
}

//funcion para acomodar de la z-a//
export function filtradoZa() {
  let pokekz = datapokemon();
  let pokemonZA = pokekz.sort((a,b)=>{
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
  })
  console.log(pokemonZA);

// aqui vamos a renderizar 
let renderTarjetasDOM = document.querySelector('.tarjetas');
let filtrado1 = document.getElementById("filtrado1");
filtrado1.innerHTML = "";
renderTarjetasDOM.innerHTML = "";

document.getElementById("pantalla3").style.display = "block";
document.getElementById("pantalla2").style.display = "none";

const filtrado = pokemonZA;
  filtrado.forEach(elemento => {
    let cardContainer = document.createElement('div');
        cardContainer.classList.add("tarjetaLadoA");
        let image = document.createElement('img')
        image.classList.add("muñequitos");
        let numeroPokemon = document.createElement('h1')
        numeroPokemon.classList.add("numeros");
        let nombre = document.createElement('h3')
        nombre.classList.add("nombres");
        let altura = document.createElement('h4')
        let peso = document.createElement('h4')
        let tipo = document.createElement('h4')
        let resistencia = document.createElement('p')
        resistencia.classList.add("resistencia1");
        let debilidades = document.createElement('p')
        debilidades.classList.add("debilidades1");
        let cardContainer2 = document.createElement('div')
        cardContainer2.classList.add("tarjetaLadoB")
        let info = document.createElement('h2')
        info.classList.add("ladoB")
        
    image.src = `${elemento.img}`
    numeroPokemon.textContent = `${elemento.num}`
    nombre.textContent = `${elemento.name}`
    altura.textContent = 'ALTURA: ' + `${elemento.size.height}`
    peso.textContent = 'PESO: ' + `${elemento.size.weight}`
    tipo.textContent = 'TIPO: ' + `${elemento.type}`
    resistencia.textContent = 'RESISTENCIA: ' + `${elemento.resistant}`
    debilidades.textContent = 'DEBILIDADES: ' + `${elemento.weaknesses}`
    info.textContent = 'Informacion: ' + `${elemento.about}`

    cardContainer.appendChild(image)
    cardContainer.appendChild(numeroPokemon)
    cardContainer.appendChild(nombre)
    cardContainer.appendChild(altura)
    cardContainer.appendChild(peso)
    cardContainer.appendChild(tipo)
    cardContainer.appendChild(resistencia)
    cardContainer.appendChild(debilidades)
    cardContainer2.appendChild(info)

    renderTarjetasDOM.appendChild(cardContainer);
    renderTarjetasDOM.appendChild(cardContainer2);


  })
}

/*funcion para amodar de mayor a menor
let pokemonMax = pokemons.sort((a,b)=>{
    if (a.num < b.num) return 1;
    if (a.num > b.num) return -1;
  })
  console.log(pokemonMax);*/



pokemons.forEach((weaknesses) => {
 if(weaknesses === 'ice');

  console.log(weaknesses);

})
