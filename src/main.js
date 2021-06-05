//Siempre debe ir el import en la primera linea del codigo, para que se lea de manera global
import { datapokemon, datapokemonj, filtradoAbc, filtradoZa } from './data.js';
import { filtradoAbc1, filtradoAbc2 } from './data.js';
//acceder al bendito nodo
let renderTarjetasDOM = document.querySelector('.tarjetas')
let renderTarjetasDos = document.querySelector('.tarjetas2')

//esta pantalla es la principal que lleva al primer menu//
function pantalla() {
    document.getElementById("pantalla2").style.display = "block";
    document.getElementById("pantalla1").style.display = "none";
    // eslint-disable-next-line no-undef
    document.getElementById("nombre").innerHTML = nomUsuario.value;
}
document.getElementById("ingresar").addEventListener("click", pantalla);
//pantalla que se mira cuando se da click al boton kanto//
function pantallaDatosK() {
    document.getElementById("pantalla3").style.display = "block";
    document.getElementById("pantalla2").style.display = "none";

    const filtrado = datapokemon()
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
        info.textContent = 'Informacion: '+ `${elemento.about}`

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

document.getElementById("botonk").addEventListener("click", pantallaDatosK);
document.getElementById ("az1").addEventListener("click", filtradoAbc);
document.getElementById("za1").addEventListener("click", filtradoZa);



//pantalla que se mira cuando se da click al boton Johto//

function pantallaDatosJ() {
    document.getElementById("pantalla4").style.display = "block";
    document.getElementById("pantalla2").style.display = "none";
    const filtrado = datapokemonj()
    filtrado.forEach(elemento => {

        let cardContainerA = document.createElement('div');
        cardContainerA.classList.add("tarjetaLadoA1")
        let image = document.createElement('img')
        image.classList.add("muñes")
        let numeroPokemon = document.createElement('h3')
        numeroPokemon.classList.add("numerosA");
        let nombre = document.createElement('h3')
        nombre.classList.add("nombresA");
        let altura = document.createElement('p')
        altura.classList.add("alturaA");
        let peso = document.createElement('p')
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
//bien, llama a la funcion
document.getElementById("A-Z").addEventListener("click", filtradoAbc1);
document.getElementById("Z-A").addEventListener("click", filtradoAbc2);

/*function menuLateral2() {
    const fuego2 = document.getElementById(filtrarPorDebilidad('fire'))
    fuego1.textContent = fuego2.value;
 }
 document.getElementById("fuegoDos").addEventListener("click", menuLateral2);*/

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




