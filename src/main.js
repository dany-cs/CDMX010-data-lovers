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
}
document.getElementById("botonk").addEventListener("click",pantallaDatosK);
//pantalla que se mira cuando se da click al boton Johto//
function pantallaDatosJ() {
    document.getElementById("pantalla4").style.display="block";
    document.getElementById("pantalla2").style.display="none";
}
document.getElementById("botonj").addEventListener("click",pantallaDatosJ);

function regreso1() {
    document.getElementById("pantalla2").style.display="block";
    document.getElementById("pantalla3").style.display="none";
}
document.getElementById("pokebola1").addEventListener("click",regreso1);
function regreso2() {
    document.getElementById("pantalla2").style.display="block";
    document.getElementById("pantalla4").style.display="none";
}
document.getElementById("pokebola2").addEventListener("click",regreso2);
/*import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);*/
