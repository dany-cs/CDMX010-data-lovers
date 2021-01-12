function pantalla(){
    document.getElementById("pantalla2").style.display="block";
    document.getElementById("pantalla1").style.display="none";
    document.getElementById("nombre").innerHTML= "Bienvenidx " + nomUsuario.value;
}
document.getElementById("ingresar").addEventListener("click",pantalla)
/*import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);*/
