console.log("Hola Mundo");
let nombre = prompt("Ingresa tu Nombre: ");
let edad = parseInt(prompt("Ingresa Edad: "));
if(isNaN(edad)){
    alert("Error, Ingrese un Numero");
}
let mesNaci = parseInt(prompt("Ingresa mes de Nacimiento (En número): "));
switch (mesNaci) {
    case 1:
        alert("Signo es Capricornio");
        break;
    case 2:
        alert("Signo es Acuario");
        break;
    case 3:
        alert("Signo es Piscis");
        break;
    case 4:
        alert("Signo es Aries");
        break;
    case 5:
        alert("Signo es Tauro");
        break;
    case 6:
        alert("Signo es Géminis");
        break;
    case 7:
        alert("Signo es Cáncer");
        break;
    case 8:
        alert("Signo es Leo");
        break;
    case 9:
        alert("Signo es Virgo");
        break;
    case 10:
        alert("Signo es Libra");
        break;
    case 11:
        alert("Signo es Escorpio");
        break;
    case 12:
        alert("Signo es Sagitario");
        break;
    default:
        alert("Mes no Válido");
        console.error("Mes no Válido: "+mesNaci);
}
console.log(nombre + " tu edad es: " + edad);

let confirmacion = confirm("Confirma para Continuar con Validación de Edad o Cancelar para Operaciones");
if (confirmacion == true) {
    const anoActual = new Date().getFullYear();
    let anoNaci = anoActual - edad;
    if (edad > 0) {
        alert("Año de Nacimiento es: " + anoNaci);
        if (edad >= 18) {
            alert(nombre + " es mayor de edad")
        } else {
            alert(nombre + " es menor de edad")
        }
    } else {
        alert("Edad No Válida");
    }
} else {
    /*Operaciones*/
    let numeroEvaluar=parseInt(prompt(nombre + " Ingresa Número a Evaluar: "));
    if(numeroEvaluar%2==0){
        alert("Número Par");
    }else{
        alert("Número Impar");
    }
    let numeroA = parseInt(prompt(nombre + " Ingresa Número 1: "));
    let numeroB = parseInt(prompt(nombre + " Ingresa Número 2: "));
    let suma = numeroA + numeroB;
    let resta = numeroA - numeroB;
    let producto = numeroA * numeroB;
    let division = numeroA / numeroB;
    alert("Suma es: " + suma);
    alert("Resta es: " + resta);
    alert("Producto es: " + producto);
    alert("División es: " + division);
    console.log(nombre + " El tipo de dato de suma es: " + typeof suma);
    console.log(nombre + " El tipo de dato de resta es: " + typeof resta);
}


/*Clase 26-11-2024*/
/*Validar Si es Estrictamente Igual*/
/*
if(numeroA===numeroB){
    alert("Mensaje De validacion")
}*/
/*
let nombreUsuario=prompt("Ingresesu nombre");
while(nombreUsuario === '' || !isNaN(nombreUsuario)){
    alert("Ingrese un Nombre Valido");
    nombreUsuario=prompt("Ingrese su nombre");
}
alert("Su nombre es "+nombreUsuario);
*/
let nombreUsuario;
let validacion;

do{
    nombreUsuario=prompt("Ingresesu nombre");
    validacion=nombreUsuario === '' || !isNaN(nombreUsuario);
    if(validacion){
        alert("Ingrese un Nombre Valido");
    }
}while(validacion);
alert("Su nombre es "+nombreUsuario);

for (let i=0; i<5;i++){
    console.log("Me estooy ejecutando "+(i1)+ " veces");
}