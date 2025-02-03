const boton1 = document.querySelector("#boton1");
const btnSaludo = document.querySelector("#btnSaludo");
const footer = document.querySelector("footer");
const mensaje = document.querySelector("#mensaje");

boton1.onclick = tocame;
btnSaludo.onclick = saludo;

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
    else if (operacio == "rand") resultadoOperacion = rand();

    if (resultadoOperacion == Infinity){
        document.body.classList.add("gradient");
    }

    document.querySelector("#resultat").value= resultadoOperacion;
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

function rand(){
    return parseInt(Math.random()*1000);
}

var random = function(){
    var intervalo = setInterval(()=>{
        var valor = rand();
        mensaje.textContent = valor;
        if (valor == 999) clearInterval(intervalo);
    }, 1);
}();