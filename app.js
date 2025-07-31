//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Bienvenido al mundo dev';
//window.onload = function() {
//    document.querySelector("h1").textContent = "Bienvenido al mundo dev";
//};
//alert("¡Bienvenida y bienvenido a nuestro sitio web!");


//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número secreto';

///let parrafo = document.querySelector('p');
///parrafo.innerHTML = 'indica un número del 1 al 10';

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
///let numeroSecreto = generarNumeroSecreto();
///console.log(numeroSecreto);
///let intentos = 1;

function asignarTextoElemento(elemento, texto){
    //let titulo = document.querySelector('h1');
    //titulo.innerHTML = 'Juego del número secreto ACTUALIZADO';
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    //alert('Click botón, desde la función');
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   // console.log(typeof((numeroDeUsuario)));
   // console.log(numeroSecreto);
   // console.log(typeof((numeroSecreto)));
   // console.log(numeroDeUsuario);
   // console.log(numeroDeUsuario === numeroSecreto);
   ///console.log(numeroSecreto); 
   //console.log(intentos); 
   
   if (numeroDeUsuario === numeroSecreto){
        parseInt(document.getElementById('reiniciar').removeAttribute('disabled'));
        asignarTextoElemento('p',`Acertaste número secreto en ${intentos} ${(intentos ===1) ? 'vez...' : 'veces...'}`);
    } else { 
        /// Usuario No Acerta
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','el número secreto es MENOR...!');        
        } else {
                asignarTextoElemento('p','el número secreto es MAYOR...!');        
               }
    intentos++;
    limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    //let numeroSecreto = Math.floor(Math.random()*10)+1;
    //return numeroSecreto;
    ///return Math.floor(Math.random()*10)+1;
    ///Usando Lista
    //let numeroGenerado = Math.floor(Math.random()*10)+1; mejoramos el codigo en la siguiete linea
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    ////Si ya asociamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p',`Ya se sortearon todos los números posibles`);
    } else {
              // si el numero generado está incluido en la lista
            if (listaNumerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();
            } else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }    
 }

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`indica un número del 1 al ${numeroMaximo}!`);
    ///Generar numero Aleatorio
    numeroSecreto = generarNumeroSecreto();
    ///console.log(numeroSecreto)
    ///inicializar el numero intentos
    intentos = 1;
    
}

function reiniciarJuego(){
    ///limpiar Caja
    limpiarCaja();
    ///indicar mensaje  de numero
    condicionesIniciales();
    /// Deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

