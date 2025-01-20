var texto = "Hola Mundo";
console.log(texto);
texto = "Adios Mundo";
console.log(texto + "!!!");

var a = 2;
var b = 5;

if (a > b) {
    console.log("a es mayor que b");
} else if (b > a) {
    console.log("b es mayor que a");
} else {
    console.log("son iguales.");
}
//b vale 5
while (b > 0) {
    console.log("b vale: " + b--);
}
//b vale 0

b = 5;
for (var i = b; i > 0; i--) {
    console.log("i vale: " + i);
}

var c = null;

if (c > 0) {
    console.log("c es mayor que 0");
}


var lista = ["Pedro", "Dani", "Jesús"];

console.log(lista[2]);
lista.push("Vico");
console.log(lista);

for (var i = 0; i < lista.length; i++) {
    excelente(lista[i]);
}

var lista2 = [1, 2, 3, "Daniel", , , , 9];

console.log(lista2);
for (var i = 0; i < lista2.length; i++) {
    if (lista2[i] === undefined) continue;
    if (Number.isInteger(lista2[i])) {
        console.log("La posición " + i + " es un número, y vale " + lista2[i] + ".");
    } else {
        console.log("La posición " + i + " NO es un número, y vale " + lista2[i] + ".");
    }
}

function excelente(nombre) {
    console.log(nombre + " tiene un 10!!");
}

var edad = prompt("¿Cual es tu edad?");

if (isNaN(edad)) {
    edad = prompt("No has introducido un número, vuelve a probar.¿Cual es tu edad?");
} 

if (edad >= 18) {
    alert("Eres mayor de edad");
} else {
    alert("No puedes acceder a este sitio web");
    window.location = "http://www.google.es";
}

