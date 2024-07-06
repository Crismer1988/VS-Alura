//Verifica el dia de la semana
let dia = prompt ("Que dia de la semana es?");

if (dia === "sabado" || dia === "domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

//Verifica el numero ingresado
let numero = prompt ("Ingresa un numero:");

if (numero >= 0) {
    alert ("El numero es positivo")
} else {
    alert ("El numero es negativo")
}

//Verifica puntuacion juego
let puntuacion = 0;

if (puntuacion >= 100) {
    alert ("¡Felicidades, has ganado!")
} else {
    alert ("Intentalo nuevamente para ganar.")
}

//Mensaje de saldo con template
let saldo = 1;

alert (`Tu saldo actual es: ${saldo}`);

//Mensaje bienvenida template
let nombre = prompt ("Escribe tu nombre, por favor")

alert (`Tu nombre es: ${nombre}`)

