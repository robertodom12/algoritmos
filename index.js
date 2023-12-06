/* 
    numerico
    strings o cadenas
    booleano
*/
/*
    var suma = 0;
    console.log("suma ahora es:", suma);
    suma = "hola";
    console.log("suma ahora es:", suma);
    suma = true;
    console.log("suma ahora es:", suma);
    suma = false;
    console.log("suma ahora es:", suma);
    suma = "anita es pute"
    console.log("suma ahora es:", suma);
*/

function suma(firstNumber, secondNumber) {
    let resultado = firstNumber + secondNumber;
    return resultado;
}

var userName = "Anita";
var manzanas = 9;
var platanos = 10;

var resultadoSuma = suma(manzanas, platanos);

function concatenarTextos(texto1, texto2) {
    let textoConcatenado = texto1 + " " + texto2;
    return textoConcatenado;
}

var oracion = concatenarTextos("anita", "comprar condones");

/*
    multiplicar : *
    dividir : /
*/

/*
    Arrays o listas
*/
var listaProductos = ["toallas femeninas", "satisfayer"];
var listaTotales = [100, 1200, 5000];

/*
    Objectos o json
*/
var persona = {
    nombre: "Ana",
    edad: 20,
    vive: true
}


var amigo = {
    nombre: "Matu",
    foto: "https",
    status: true
}

var listaAmigos = [];


function guardarAmigo(nombre, foto, status, edad, listaAmigos) {
    var amigo = {
        nombre: nombre,
        foto: foto,
        stauts: status,
        edad: edad
    }

    return listaAmigos;
}

listaAmigos = guardarAmigo("Rodrido", "foto", false, 28, listaAmigos);




let disneylandProducts = [
    { id: 1, nombre: "Disney's Grand Californian Hotel & Spa" },
    { id: 2, nombre: "Disneyland Hotel" },
    { id: 3, nombre: "Disneyland simpons" }
];
let i = 2;



let facturas = [
    {
        razonSocial: "Venturapark SA DE CV",
        nombreCliente: "Viajero",
        fecha: new Date(),
        producto: "Ventura fun"
    },
    {
        razonSocial: "Selvatica SA DE CV",
        nombreCliente: "Viajero",
        fecha: new Date(),
        producto: "Gimme all"
    }
]

/*
    false y false  = true
    true y true = true
    false y true = false
    true y false = false

    == es igual a
    != diferente que
    > mayor que
    < menor que
    >= mayor o igual a 
    =< igual o menor que

    or ||

*/

let regaloAnita = 500;
let rodrigo = 150;
let antonio = 10;

function validarRegalosNavidad(precioRegalo) {
    let precioMinimo = 300;
    
    if (precioRegalo <= precioMinimo) {
        return "Inviertele mas pinche codo";
    } else {
        return "Tu regalo si es de liverpool";
    }
}

console.log(validarRegalosNavidad(regaloAnita))

console.log(validarRegalosNavidad(rodrigo))

console.log(validarRegalosNavidad(antonio))


