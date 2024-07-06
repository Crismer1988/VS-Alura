alert("¡Bienvenida y bienvenido a nuestro sitio web!");

let nombre = Luna;

let edad = 25;

let numeroDeVentas = 50;

let saldoDisponible = 1000;

alert("¡Error! Completa todos los campos");

let mensajeDeError="¡Error! Completa todos los campos";

alert(mensajeDeError);

nombre = prompt("Por favor ingresa tu nombre");

edad = prompt("Por favor, ingresa tu edad:");

edad = parseInt(edad, 10);

if (edad >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!");
}