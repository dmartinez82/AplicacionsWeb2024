const boton1 = document.querySelector("#boton1");
const btnSaludo = document.querySelector("#btnSaludo");
const btnIniciaIntervalo = document.querySelector("#btnIniciaIntervalo");
const btnParaxIntervalo = document.querySelector("#btnParaIntervalo");
const btnImagenRandom = document.querySelector("#btnImagenRandom");
const footer = document.querySelector("footer");
const mensaje = document.querySelector("#mensaje");
const reloj = document.querySelector("#reloj");
const listaOperaciones = document.querySelector("#listaOperaciones");
const pImagen = document.querySelector("#pImagen");

boton1.onclick = tocame;
btnSaludo.onclick = saludo;
btnIniciaIntervalo.onclick = iniciaIntervalo;
btnParaIntervalo.onclick = paraIntervalo;
btnImagenRandom.onclick = muestraImagenRandom;

document.onkeydown = (e) => teclaPresionada(e);

function teclaPresionada(e){
    let tecla = e.key.toUpperCase();
    
    if (!isNaN(tecla)) tecla = parseInt(tecla)

    if(/^[0-9]$/.test(tecla)){
        cambiaFondo(tecla);
    } else if(tecla=="S"){
        paraIntervalo();
    } else if (tecla=="C"){
        iniciaIntervalo();
    }
}

function cambiaFondo(num){
    let red = Math.floor(Math.random()*(255/num));
    let green = Math.floor(Math.random()*(255/num));
    let blue = Math.floor(Math.random()*(255/num));
    document.body.style.backgroundColor  = `rgb(${red}, ${green}, ${blue})`;
}

let contador = 0;

function tocame(){
    contador++;
    var veces = (contador==1)?"vez":"veces";
    boton1.textContent = `Me han tocado ${contador} ${veces}!`;
}

function saludo(){
    var autor = footer.textContent;
    autor = autor.trim().replace("©", "");
    mensaje.textContent = "Hola" + autor;
    mensaje.style.color = "red";
    mensaje.classList.add("fondoVerde");
}

function calcula(){

    var primer = document.querySelector("#primer").value;
    var segon = document.querySelector("#segon").value;
    var operacio = document.querySelector("#operacions").value;

    if(primer == "") primer = 0;
    if(segon == "") segon = 0;

    primer = parseInt(primer);
    segon = parseInt(segon);

    var resultadoOperacion;
    if (operacio == "+") resultadoOperacion = suma(primer, segon);
    else if (operacio == "-") resultadoOperacion = resta(primer, segon);
    else if (operacio == "*") resultadoOperacion = mult(primer, segon);
    else if (operacio == "/") resultadoOperacion = div(primer, segon);
    else if (operacio == "rand") resultadoOperacion = generaNumeroAleatorio();

    if (resultadoOperacion == Infinity){
        document.body.classList.add("gradient");
    }

    document.querySelector("#resultat").value= resultadoOperacion;

    guardaRegistroOperacion(primer, segon, operacio, resultadoOperacion);
}

function guardaRegistroOperacion(primer, segon, operacio, resultadoOperacion){
    listaOperaciones.innerHTML += `<li>${primer}${operacio}${segon}=${resultadoOperacion}</li>`;
}

function suma(a, b){
    return a+b;
}

function resta(a, b){
    if(a>b) return a-b;
    else return b-a;
}

function mult(a, b){
    return a*b;
}

function div(a, b){
    return a/b;
}

function generaNumeroAleatorio(){
    return parseInt(Math.random()*1000);
}

var intervalo = null;

function pintaNumerosAleatorios(){
    mensaje.textContent = generaNumeroAleatorio();
}

function iniciaIntervalo(){
    if(intervalo == null) intervalo = setInterval(pintaNumerosAleatorios, 1);
    else console.log("ya existe un intervalo en funcionamiento. No hacemos nada." + intervalo)
};

function paraIntervalo(){
    clearInterval(intervalo);
    intervalo = null;
};

let segundos = 0;
let minutos = 0;
let horas = 0;
let dias = 0;

function pintaReloj(){
    segundos++;
    if (segundos>=60){
        minutos++;
        segundos = 0;
    }

    if (minutos>=60){
        horas++;
        minutos = 0;
    }

    if (horas>=24){
        dias++;
        horas = 0;
    }

    if (segundos<10) segundos = segundos.toString().padStart(2, "0");
    if (minutos<10) minutos = minutos.toString().padStart(2, "0");
    if (horas<10) horas = horas.toString().padStart(2, "0");
    reloj.textContent = `${dias}:${horas}:${minutos}:${segundos}`;
}

function iniciaReloj(){
    setInterval(pintaReloj, 1000);
}

iniciaReloj();

function muestraImagenRandom(){
    var numAleat = Math.floor(Math.random()*5)+1;
    pImagen.innerHTML = `<img src="../img/dinamicas/Image0${numAleat}_red.jpg" alt="">`; 
}