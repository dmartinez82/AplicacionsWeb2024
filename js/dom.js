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