console.log("Hola Mundo");

//var nombreUsuario; var permite repetir nombres de variables, let no
/*
let nombreUsuario1;
let nombreUsuario2;
let saludo="Hola"
const numeroConst=50;
let numeroA=10;
let numeroB=5;

nombreUsuario1="Claudio";
nombreUsuario2="Marcel";//string
nombreUsuario2="123";//number
nombreUsuario2=true;//boolean

console.log(nombreUsuario1);
console.log(nombreUsuario2);
console.log(numeroConst);
//saber el tipo de dato que tengo

console.log(typeof nombreUsuario2);

//concatenar
console.log(saludo+" "+nombreUsuario1);
//operaciones aritmeticas
console.log("Suma: "+(numeroA+numeroB));
console.log("Resta: "+(numeroA-numeroB));
console.log("Producto: "+(numeroA*numeroB));
console.log("Division: "+(numeroA/numeroB));

//ingresar valores por pantalla
//prompt + alert + confirm
let nombreUsuario=prompt("Ingresa Nombre: ");
let edadUsuario=prompt("Ingresa Edad: ");
//console.log(nombreUsuario);
alert("El nombre Ingresado es: "+nombreUsuario+" y tiene: "+edadUsuario+" años");
let confirmacion=confirm("Estas Seguro de Proceder?");
console.log(confirmacion);
*/

//prompt recibe caracter, para hacer operaciones hay que parsear
let nombre = prompt("Ingresa tu Nombre: ");
let edad = parseInt(prompt("Ingresa Edad: "));
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







