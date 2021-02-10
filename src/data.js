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
export function filtradoAbc1() {
 /** mover dentro */
  let pokej = datapokemonj();
  let pokemonaz1 = pokej.sort((a,b)=>{
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
  })
  console.log(pokemonaz1);
  //Aqui vamos a renderizar
  let renderTarjetasDos = document.querySelector('.tarjetas2');
  let filtrado2 = document.getElementById("filtrado2");
  filtrado2.innerHTML = "";
  renderTarjetasDos.innerHTML = "";
 
  document.getElementById("pantalla4").style.display = "block";
  document.getElementById("pantalla2").style.display = "none";
  const filtrado = pokemonaz1;
  filtrado.forEach(elemento => {
      console.log(elemento)
      let cardContainerA = document.createElement('div');
      cardContainerA.classList.add("tarjetaLadoA1")
      //cardContainerA.setAttribute("id", `${elemento.num}`);
      let image = document.createElement('img')
      image.classList.add("muñes")
      let numeroPokemon = document.createElement('h3')
      numeroPokemon.classList.add("numerosA");
      let nombre = document.createElement('h3')
      nombre.classList.add("nombresA");
      let altura = document.createElement('h4')
      altura.classList.add("alturaA");
      let peso = document.createElement('h4')
      peso.classList.add("pesoA");
      let tipo = document.createElement('p')
      tipo.classList.add("tipoA");
      let resistencia = document.createElement('p')
      resistencia.classList.add("resistenciaA");
      let debilidades = document.createElement('p')
      debilidades.classList.add("debilidadesA");
      let cardContainerB = document.createElement('div')
      cardContainerB.classList.add("tarjetaLadoB1")
      let info = document.createElement('nav')
      info.classList.add("ladoB2")
      image.src = `${elemento.img}`
      numeroPokemon.textContent = `${elemento.num}`
      nombre.textContent = `${elemento.name}`
      altura.textContent = 'ALTURA: ' + `${elemento.size.height}`
      peso.textContent = 'PESO: ' + `${elemento.size.weight}`
      tipo.textContent = 'TIPO: ' + `${elemento.type}`
      resistencia.textContent = 'RESISTENCIA: ' + `${elemento.resistant}`
      debilidades.textContent = 'DEBILIDADES: ' + `${elemento.weaknesses}`
      info.textContent = `${elemento.about}`
      cardContainerA.appendChild(image)
      cardContainerA.appendChild(numeroPokemon)
      cardContainerA.appendChild(nombre)
      cardContainerB.appendChild(info)
      cardContainerA.appendChild(altura)
      cardContainerA.appendChild(peso)
      cardContainerA.appendChild(tipo)
      cardContainerA.appendChild(resistencia)
      cardContainerA.appendChild(debilidades)
      renderTarjetasDos.appendChild(cardContainerA)
      renderTarjetasDos.appendChild(cardContainerB)
  })
}
//funcion para acomodar de la z-a//

export function filtradoAbc2() {
  /** mover dentro */
   let pokejt = datapokemonj();
   let pokemonaz2 = pokejt.sort((a,b)=>{
     if (a.name < b.name) return 1;
     if (a.name > b.name) return -1;
   })
   console.log(pokemonaz2);
   //Aqui vamos a renderizar
   let renderTarjetasDos = document.querySelector('.tarjetas2');
   let filtrado2 = document.getElementById("filtrado2");
   filtrado2.innerHTML = "";
   renderTarjetasDos.innerHTML = "";
   document.getElementById("pantalla4").style.display = "block";
   document.getElementById("pantalla2").style.display = "none";
   const filtrado = pokemonaz2;
   filtrado.forEach(elemento => {
       console.log(elemento)
       let cardContainerA = document.createElement('div');
       cardContainerA.classList.add("tarjetaLadoA1")
       //cardContainerA.setAttribute("id", `${elemento.num}`);
       let image = document.createElement('img')
       image.classList.add("muñes")
       let numeroPokemon = document.createElement('h3')
       numeroPokemon.classList.add("numerosA");
       let nombre = document.createElement('h3')
       nombre.classList.add("nombresA");
       let altura = document.createElement('h4')
       altura.classList.add("alturaA");
       let peso = document.createElement('h4')
       peso.classList.add("pesoA");
       let tipo = document.createElement('p')
       tipo.classList.add("tipoA");
       let resistencia = document.createElement('p')
       resistencia.classList.add("resistenciaA");
       let debilidades = document.createElement('p')
       debilidades.classList.add("debilidadesA");
       let cardContainerB = document.createElement('div')
       cardContainerB.classList.add("tarjetaLadoB1")
       let info = document.createElement('nav')
       info.classList.add("ladoB2")
       image.src = `${elemento.img}`
       numeroPokemon.textContent = `${elemento.num}`
       nombre.textContent = `${elemento.name}`
       altura.textContent = 'ALTURA: ' + `${elemento.size.height}`
       peso.textContent = 'PESO: ' + `${elemento.size.weight}`
       tipo.textContent = 'TIPO: ' + `${elemento.type}`
       resistencia.textContent = 'RESISTENCIA: ' + `${elemento.resistant}`
       debilidades.textContent = 'DEBILIDADES: ' + `${elemento.weaknesses}`
       info.textContent = `${elemento.about}`
       cardContainerA.appendChild(image)
       cardContainerA.appendChild(numeroPokemon)
       cardContainerA.appendChild(nombre)
       cardContainerB.appendChild(info)
       cardContainerA.appendChild(altura)
       cardContainerA.appendChild(peso)
       cardContainerA.appendChild(tipo)
       cardContainerA.appendChild(resistencia)
       cardContainerA.appendChild(debilidades)
       renderTarjetasDos.appendChild(cardContainerA)
       renderTarjetasDos.appendChild(cardContainerB)
   })
 }























/*export function AZnombresJ(){
  let nomJ = pokemons.filter(function ())
}*/
//console.log(pokemons.sort());//

// [1, 2, 3, 4, 5].includes(5) // true
// [1, 2, 3, 4, 5].includes(0) // false
// ["fire", "ice", "flying", "psychic"].includes('fire') // true
/*
export function filtrarPorDebilidad(debilidad) {
  const pokemonsFiltrados = pokemons.filter(function (pokemon) {
    return pokemon.weaknesses.includes(debilidad);
  })

  return pokemonsFiltrados;
}

export function filtrarPorDebilidad(debilidad) {
  const pokemonsFiltrados = pokemons.filter(function (pokemon) {
    return pokemon.weaknesses.includes(debilidad);
  })

  return pokemonsFiltrados;
}


  //'pikachu'[0] === 'p' // true
 // 'volbasor'.includes('vol') // true
 
export function filtrarAZ(character) {
  const pokemonsFiltrados = pokemons.sort(function(pokemon){
    return pokemon.name[0] === character
  })

  return pokemonsFiltrados;
}

// const letra = document.getElementById('letra').value
// filtrarAZ(letra)*/