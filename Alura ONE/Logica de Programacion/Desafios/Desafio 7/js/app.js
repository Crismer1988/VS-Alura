//IMC
function calcularIMC(peso, altura) {
    let imc = peso / Math.pow(altura, 2);
    console.log(imc);
}

calcularIMC (86, 1.75);

//Factorial
function factorial(n) {
    if (n == 0 || n == 1) {
        console.log(1);
    } else {
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        console.log(resultado);
    }
}

factorial(5);

//Conversor de divisas
function conversor(dolares) {
    let dolar = 4.80;
    let reales = dolares * dolar;
    console.log(`$${dolares} ${dolares < 2 ? "equivale" : "equivalen"} a R$${reales}`);
}

conversor(1);

//Rectangulo
function areaPerimetroRectangulo(base, altura) {
    let area = base * altura;
    let perimetro = 2 * (base + altura);
    console.log(`El area del rectangulo es ${area} y el perimetro es ${perimetro}`);
}

parseFloat(areaPerimetroRectangulo(5, 7));

//Circulo
function areaPerimetroCirculo(radio) {
    let areaCirculo = Math.PI * Math.pow(radio, 2);
    let perimetroCirculo = 2 * Math.PI * radio;
    console.log(`El area del circulo es ${areaCirculo.toFixed(2)} y el perimetro es ${perimetroCirculo.toFixed(2)}`);
}

areaPerimetroCirculo(3);

//Tabla multiplicar
function tablaMultiplicar(numero) {
    let multiplicador = 0;
    while (multiplicador <= 10) {
        let producto = numero * multiplicador;
        console.log(`${numero} x ${multiplicador} = ${producto}`);
        multiplicador++;
    }
}

    tablaMultiplicar(7);