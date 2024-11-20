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
let numeroA=parseInt(prompt("Ingrese Numero 1: "));
let numeroB=parseInt(prompt("Ingrese Numero 2: "));
let resultado=numeroA+numeroB;

//alert(resultado);
alert("El resultado es: "+ resultado);
console.log(typeof resultado);