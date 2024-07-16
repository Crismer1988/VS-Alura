//Saludo
function saludo() {
    let saludo = "Hola, mundo!";
    console.log (saludo);
}

saludo(); 

//Saludo con nombre
function saludoConNombre(nombre) {
    let saludoConNombre = `Hola, ${nombre}!`;
    console.log (saludoConNombre);
}

saludoConNombre ("Cristian");

//Suma parametros
function sumaParametros(a, b) {
    let suma = a + b;
    console.log (suma);
}

sumaParametros (5, 3);

//Promedio parametros
function promedioParametros(num1, num2, num3) {
    let suma = num1 + num2 + num3;
    let promedio = suma / 3;
    console.log (promedio);
    }

promedioParametros (10, 20, 30);

//Numero mayor
function numeroMayor(num1, num2) {
    if (num1 > num2) {
        console.log (num1);
    } else {
        console.log (num2);
    }
}

numeroMayor (5, 10);

//Numero Times-self
function timesSelf(num) {
    let resultado = num * num;
    console.log (resultado);
}

timesSelf (5);