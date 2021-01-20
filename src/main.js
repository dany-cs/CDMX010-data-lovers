//import { example } from './data.js';
// import data from './data/lol/lol.js';
import { datapokemon, datapokemonj } from './data.js';
// import data from './data/rickandmorty/rickandmorty.js';
//console.log(data);
//esta pantalla es la principal que lleva al primer menu//
function pantalla(){
    document.getElementById("pantalla2").style.display="block";
    document.getElementById("pantalla1").style.display="none";
    document.getElementById("nombre").innerHTML= nomUsuario.value;
}
document.getElementById("ingresar").addEventListener("click",pantalla);
//pantalla que se mira cuando se da click al boton kanto//
function pantallaDatosK(){
    document.getElementById("pantalla3").style.display="block";
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("hamburgesa1").style.display="block";

    const filtrado = datapokemon()
    filtrado.forEach(elemento=>{
        console.log(elemento)
        var lista = document.createElement("li");
        lista.innerHTML = elemento.name;
        document.getElementById("filtrado1").appendChild(lista);
    }) 
}
document.getElementById("botonk").addEventListener("click",pantallaDatosK);
//pantalla que se mira cuando se da click al boton Johto//

function pantallaDatosJ() {
    document.getElementById("pantalla4").style.display="block";
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("hamburgesa1").style.display="block";

    const filtrado = datapokemonj()
    filtrado.forEach(elemento=>{
        console.log(elemento)
        var lista = document.createElement("li");
        lista.innerHTML = elemento.name;
        document.getElementById("filtrado2").appendChild(lista);
    }) 
    
}
document.getElementById("botonj").addEventListener("click",pantallaDatosJ);
//boton pokebola que regresa a menu principal//
function regreso1() {
    document.getElementById("pantalla2").style.display="block";
    document.getElementById("pantalla3").style.display="none";
    document.getElementById("hamburgesa1").style.display="none";
}
document.getElementById("pokebola1").addEventListener("click",regreso1);
//boton pokebola que regresa a menu principal//
function regreso2() {
    document.getElementById("pantalla2").style.display="block";
    document.getElementById("pantalla4").style.display="none";
    document.getElementById("hamburgesa1").style.display="none";
}
document.getElementById("pokebola2").addEventListener("click",regreso2);
//en la siguiente linia comienza el menu hamburguesa//
//selector, declaracion de la variable//
var menu = document.querySelector('.hamburgesa');
//metodo, tipo de funcion a realizar//
function toggleMenu(event) {
    document.querySelector(".menufiltro").classList.toggle("is_active");
    event.preventDefault(); 
}
//evento de al dar click//
menu.addEventListener('click',toggleMenu, false);



