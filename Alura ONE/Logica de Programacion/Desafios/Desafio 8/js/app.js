//Lista vacia
listaGenerica = [];

//Lenguajes
lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Push al array
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//Mostrar elementos
function mostrarLenguajes() {
    for (let lenguaje of lenguagesDeProgramacion) {
        console.log(lenguaje);
    }
}

mostrarLenguajes()

//Mostrar elementos inversos
function mostrarLenguajesInversos() {
    for (let lenguaje of lenguagesDeProgramacion.reverse()) {
        console.log(lenguaje);
    }
}

mostrarLenguajesInversos();

//Promedio Lista
listaNumeros = [1, 2, 3, 4, 5];
function promedioArray() {
    let suma = 0;
    for (let numero of listaNumeros) {
        suma += numero;
    }
    let promedio = suma / listaNumeros.length;
    console.log(`El promedio de la lista es: ${promedio}`);
}

promedioArray();


//Greatest and smallest array
function getMinAndMax() {
    let max = Math.max(...listaNumeros);
    let min = Math.min(...listaNumeros);
    console.log(`El número más grande es: ${max} y el más pequeño es: ${min}`);
}

getMinAndMax();

//Suma array all
function sumaArray() {
    let adicao = 0;
    for (let numero of listaNumeros) {
        adicao += numero;
    }
    console.log(`La suma de los numeros de la lista es: ${adicao}`);
}

sumaArray();

//Buscador array
function buscarEnArray(number) {
    if (listaNumeros.includes(number)) {
        console.log(`${number} se encuentra en la lista.`);
    } else {
        console.log("-1");
    }
}

buscarEnArray(3);

//Suma elementos array
let numeros1 = [2, 4, 6, 8];
let numeros2 = [8, 6, 4, 2];
function sumaELementosArrays() {
    let listaSuma = [];
    for (let i = 0; i < numeros1.length; i++) {
        listaSuma.push(numeros1[i] + numeros2[i]);
    }
    console.log(listaSuma);
}

sumaELementosArrays();

//sqr of array
function cuadradosArray() {
    let cuadradosLista = [];
    for (cuadrado of listaNumeros) {
        cuadradosLista.push(cuadrado * cuadrado);
    }
    console.log(cuadradosLista);
}

cuadradosArray();
