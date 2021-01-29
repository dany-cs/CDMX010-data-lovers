//Siempre debe ir el import en la primera linea del codigo, para que se lea de manera global
import { datapokemon, datapokemonj } from './data.js';

//acceder al bendito nodo
let renderTarjetasDOM = document.querySelector('.tarjetas')
let renderTarjetasDos = document.querySelector('.tarjetas2')
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
    document.getElementById("hamburgesa1").style.display = "block";
    //variable para mostrar nombres//
    const filtrado = datapokemon()
    filtrado.forEach(elemento => {
        console.log(elemento)
        let image = document.createElement('img')
        let parrafo = document.createElement('p')
        image.src = `${elemento.img}`
        parrafo.textContent = `${elemento.name}`
        renderTarjetasDOM.appendChild(image)
        renderTarjetasDOM.appendChild(parrafo)
        
    })
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
    document.getElementById("hamburgesa1").style.display = "none";
}
document.getElementById("pokebola1").addEventListener("click", regreso1);
//boton pokebola que regresa a menu principal//
function regreso2() {
    document.getElementById("pantalla2").style.display = "block";
    document.getElementById("pantalla4").style.display = "none";
    document.getElementById("hamburgesa1").style.display = "none";
}
document.getElementById("pokebola2").addEventListener("click", regreso2);
//en la siguiente linea comienza el menu hamburguesa//
//selector, declaracion de la variable//
var menu = document.querySelector('.hamburgesa');
//metodo, tipo de funcion a realizar//
function toggleMenu(event) {
    document.querySelector(".menufiltro").classList.toggle("is_active");
    event.preventDefault();
}
//evento de  hamburguesa al dar click//
menu.addEventListener('click', toggleMenu, false);
