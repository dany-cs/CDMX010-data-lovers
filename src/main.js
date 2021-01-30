//Siempre debe ir el import en la primera linea del codigo, para que se lea de manera global
import { datapokemon, datapokemonj } from './data.js';
//acceder al bendito nodo
let renderTarjetasDOM = document.querySelector('.tarjetas')
let renderTarjetasDos = document.querySelector('.tarjetas2')
//let filtradoDeMenuABC = document.querySelector('.menuABC')
//esta pantalla es la principal que lleva al primer menu//
function pantalla() {
    document.getElementById("pantalla2").style.display = "block";
    document.getElementById("pantalla1").style.display = "none";
    document.getElementById("nombre").innerHTML = nomUsuario.value;
}
document.getElementById("ingresar").addEventListener("click", pantalla);
//pantalla que se mira cuando se da click al boton kanto//
function pantallaDatosK() {
    document.getElementById("pantalla3").style.display = "block";
    document.getElementById("pantalla2").style.display = "none";
    //funcion para filtrado
    //const filtradouno = filtradoABC()
    //filtradouno.forEach(elemento =>{
       // let

    //variable para mostrar nombres//
    const filtrado = datapokemon()
    filtrado.forEach(elemento => {
        console.log(elemento)
        let cardContainer = document.createElement('div');
        cardContainer.classList.add("tarjetaLadoA");
        let image = document.createElement('img')
        image.classList.add("muñequitos");
        let numeroPokemon = document.createElement('h4')
        numeroPokemon.classList.add("numeros");
        let nombre = document.createElement('h3')
        nombre.classList.add("nombres");
        let altura = document.createElement('p')
        let peso = document.createElement('p')
        let tipo = document.createElement('p')
        let resistencia = document.createElement('p')
        let debilidades = document.createElement('p')
        let cardContainerB = document.createElement('div');
        //cardContainerB.classList.add("tarjetaLadoB")
        //let info = document.createElement('p')
        
        image.src = `${elemento.img}`
        numeroPokemon.textContent = `${elemento.num}`
        nombre.textContent = `${elemento.name}`
        altura.textContent = 'ALTURA: ' + `${elemento.size.height}`
        peso.textContent = 'PESO: ' + `${elemento.size.weight}`
        tipo.textContent = 'TIPO: ' + `${elemento.type}`
        resistencia.textContent = 'RESISTENCIA: ' + `${elemento.resistant}`
        debilidades.textContent = 'DEBILIDADES: ' + `${elemento.weaknesses}`
        //info.textContent = `${elemento.about}`

        cardContainer.appendChild(image)
        cardContainer.appendChild(numeroPokemon)
        cardContainer.appendChild(nombre)
        cardContainer.appendChild(altura)
        cardContainer.appendChild(peso)
        cardContainer.appendChild(tipo)
        cardContainer.appendChild(resistencia)
        cardContainer.appendChild(debilidades)
        //cardContainerB.appendChild(info)

        renderTarjetasDOM.appendChild(cardContainer);
        //renderTarjetasDOM.appendChild(cardContainerB);
    })

    function menuLateral1() {
       const fuego1 = document.getElementById(filtrarPorDebilidad('fire'))
       fuego1.textContent = fuego1.value;
    }
    document.getElementById("fuegoUno").addEventListener("click", menuLateral1);

}
document.getElementById("botonk").addEventListener("click", pantallaDatosK);
//pantalla que se mira cuando se da click al boton Johto//

function pantallaDatosJ() {
    document.getElementById("pantalla4").style.display = "block";
    document.getElementById("pantalla2").style.display = "none";
    const filtrado = datapokemonj()
    filtrado.forEach(elemento => {
        console.log(elemento)
        let cardContainerA = document.createElement('div');
        cardContainerA.classList.add("tarjetasA")
        let image = document.createElement('img')
        image.classList.add("muñes")
        let numeroPokemon = document.createElement('h4')
        let nombre = document.createElement('h3')
        let altura = document.createElement('h4')
        let peso = document.createElement('h4')
        let tipo = document.createElement('p')
        let resistencia = document.createElement('p')
        let debilidades = document.createElement('p')
        /*let cardContainerB = document.createElement('div')
        cardContainerB.classList.add("tarjetasB")
        let info = document.createElement('p')*/
        image.src = `${elemento.img}`
        numeroPokemon.textContent = `${elemento.num}`
        nombre.textContent = `${elemento.name}` 
        altura.textContent = 'ALTURA: ' + `${elemento.size.height}`
        peso.textContent = 'PESO: ' + `${elemento.size.weight}`
        tipo.textContent = 'TIPO: ' + `${elemento.type}`
        resistencia.textContent = 'RESISTENCIA: ' + `${elemento.resistant}`
        debilidades.textContent = 'DEBILIDADES: ' + `${elemento.weaknesses}`
        //info.textContent = `${elemento.about}`//
        cardContainerA.appendChild(image)
        cardContainerA.appendChild(numeroPokemon)
        cardContainerA.appendChild(nombre)
        //cardContainerB.appendChild(info)//
        cardContainerA.appendChild(altura)
        cardContainerA.appendChild(peso)
        cardContainerA.appendChild(tipo)
        cardContainerA.appendChild(resistencia)
        cardContainerA.appendChild(debilidades)
        renderTarjetasDos.appendChild(cardContainerA)
        //renderTarjetasDos.appendChild(cardContainerB)//


       
    })
}
document.getElementById("botonj").addEventListener("click", pantallaDatosJ);
//boton pokebola que regresa a menu principal//
function regreso1() {
    document.getElementById("pantalla2").style.display = "block";
    document.getElementById("pantalla3").style.display = "none";
}
document.getElementById("pokebola1").addEventListener("click", regreso1);
//boton pokebola que regresa a menu principal//
function regreso2() {
    document.getElementById("pantalla2").style.display = "block";
    document.getElementById("pantalla4").style.display = "none";
}
document.getElementById("pokebola2").addEventListener("click", regreso2);




