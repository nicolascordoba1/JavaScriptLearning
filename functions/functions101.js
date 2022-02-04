//Declarar la variable
function greet(){
    console.log('Hola mundo!');
}

greet();
//Expresando la función como una variable o constante
const speak = function() {
    console.log('Buen día');
};

speak();

// Argumentos  y Parametros

const saludo = function(nombre = 'extraño', tiempo = 'día'){
    console.log(`Buen ${tiempo} ${nombre}`)
};

saludo();

// Devolviendo Valores con Return

// Funcion Regular

/* const calcArea = function(radio){
    return 3.14 * radio **2
}; */

//Funcion Arrow

const calcArea = radio => 3.14 * radio**2;

const area = calcArea(5);
console.log(area);

