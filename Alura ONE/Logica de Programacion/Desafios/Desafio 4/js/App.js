//Mensaje bienvenida
let mensajeBienvenida = "Bienvenido a ONE con Alura";
console.log (mensajeBienvenida);

//Hola, mi nombre
let nombre = "Cristian";
console.log (`¡Hola, ${nombre}!`);

//Hola, mi nombre alert
let name = "Cristian";
alert (`¡Hola, ${nombre}!`);

//Pregunta
let lenguaje = prompt ("¿Cuál es el lenguaje de programación que más te gusta?");
console.log (lenguaje);

//Suma
let valor1 = 2;
let valor2 = 3;
let resultado = valor1 + valor2;
console.log (`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);

//Resta
let value1 = 8;
let value2 = 4;
let result = value1 - value2;
console.log (`La diferencia de ${value1} y ${value2} es igual a ${result}.`);

//Edad
let edad = prompt ("Cual es tu edad?");
if (edad >= 18) {
    console.log ("Eres mayor de edad!");
} else {
    console.log ("Aun eres menor de edad.");
}

//Numero
let numero = prompt ("Ingresa un numero");
if (numero > 0) {
    console.log ("Ingresaste un numero positivo.");
} else if ( numero < 0) {
    console.log ("Ingresaste un numero negativo.");
} else {
    console.log ("Tu numero es cero.");
}

//Numeros del 1 al 10
let number = 0;
while (number <10) {
    number ++;
    console.log (number);
}

//Nota
let nota = 7;

if (nota >= 7) {
    console.log ("Aprobado.");
} else { 
    console.log ("Reprobado.");
}

//Math random 1
console.log (Math.random());

//Math random 2
let randomNumber = Math.random() * 10;
console.log (Math.floor(randomNumber));

//Math random 3
let randomNumber2 = Math.floor(Math.random() * 1000);
console.log (randomNumber2);