//Texto
let texto = document.querySelector("h1");
texto.innerHTML = "Juego del Numero Secreto";

//Boton console
function botonConsole() {
    console.log("El boton ha sido clicado.");
}

//Cuidad de Brasil
function ciudadBrasil() {
    let ciudad = prompt("Escribe una ciudad de Brasil");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

//Amo JS
function loveJS() {
    alert("Yo amo JS");
}

//Suma
function sumar() {
    let numero1 = parseInt(prompt("Ingresa el primer numero"));
    let numero2 = parseInt(prompt("Ingresa el segundo numero"));
    let resultado = numero1 + numero2;
    alert(`El resultado de la suma es ${resultado}`);
}