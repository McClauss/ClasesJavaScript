/*const numeroA=10;
const numeroB=22;

const resultado1=numeroA + numeroB;
console.log("Resultado es: "+resultado); 


const numeroC=10;
const numeroD=22;

const resultado2=numeroC + numeroD;
console.log("Resultado es: "+resultado2); 
*/


/*Funciones sin parametros
function sumar(){
    const numeroA= parseInt(prompt("Ingrese Primer Numero"));
    const numeroB= parseInt(prompt("Ingrese Segundo Numero"));
    const resultado=numeroA + numeroB;
   
    console.log("Resultado es: "+resultado); 
}

function restar(){
    const numeroA= parseInt(prompt("Ingrese Primer Numero"));
    const numeroB= parseInt(prompt("Ingrese Segundo Numero"));
    const resultado=numeroA - numeroB;
   
    console.log("Resultado es: "+resultado); 
}

function multiplicar(){
    const numeroA= parseInt(prompt("Ingrese Primer Numero"));
    const numeroB= parseInt(prompt("Ingrese Segundo Numero"));
    const resultado=numeroA * numeroB;
   
    console.log("Resultado es: "+resultado); 
}

function dividir(){
    const numeroA= parseInt(prompt("Ingrese Primer Numero"));
    const numeroB= parseInt(prompt("Ingrese Segundo Numero"));
    const resultado=numeroA / numeroB;
    if(numeroB!==0){
        console.log("Resultado es: "+resultado); 
    }else{
        console.log("No se puede dividir por cero"); 
    }
}

sumar();
restar();
multiplicar();
dividir();
*/
/*
function sumar(a,b){
    resultado=a+b;
    console.log("Resultado es: "+resultado); 
}

function restar(a,b){
    resultado=a - b;
   
    console.log("Resultado es: "+resultado); 
}

function multiplicar(a,b){

    resultado=a * b;
   
    console.log("Resultado es: "+resultado); 
}

function dividir(){

    const resultado=a / b;
    if(b!==0){
        console.log("Resultado es: "+resultado); 
    }else{
        console.log("No se puede dividir por cero"); 
    }
}

if(validarResultado(numeroA)&& validarResultado(numeroB)){
    dividir(numeroA,numeroB);
}else{
    console.error("Operacion cancelada debido a entradas invalidas");
}

sumar(numeroA,numeroB);
restar(numeroA,numeroB);
multiplicar(numeroA,numeroB);
dividir(numeroA,numeroB);*/


//Funciones con parametros

/*
let numeroA= parseInt(prompt("Ingrese Primer Numero"));
let numeroB= parseInt(prompt("Ingrese Segundo Numero"));
let operacion= prompt("Ingrese opreación  + - * / ")

function validarResultado(r){
    if(isNaN(r)){
        console.error("Ingrese solo números");
        return false;
    }else{
        return true;
    }
}

function calculadora(a,b,operacion){
    if(validarResultado(a)&& validarResultado(b)){
        let resultado;
        switch(operacion){
            case "+":
                resultado=a+b;
                console.log(" Suma es: "+resultado);
            break;
            case "-":
                resultado=a-b;
                console.log(" Resta es: "+resultado);
            break;
            case "*":
                resultado=a*b;
                console.log(" Multiplicacion es: "+resultado);
            break;
            case "/":
                resultado=a/b;
                console.log(" División es: "+resultado);
            break;
            default:
                console.error(" Operación No Válida");
        }
    }else{
        console.error("Operacion cancelada debido a entradas invalidas");
    }
}

calculadora(a,b,operacion);

*/


//funcion anonima
/*
let numeroA = parseInt(prompt("Ingrese Numero A"));
let numeroB = parseInt(prompt("Ingrese Numero B"));

const sumar=function (a,b){
    return a+b;
}

console.log(sumar(numeroA,numeroB));

const saludo= function(nombre){
    return "hola " + nombre + " cómo estás?"
}
console.log(saludo("Claudio"));*/

//funcion flecha tiene retorno implicito
/*
const sumar = (a,b)=>a+b;

console.log(sumar(10,20));
*/

//calculadora con do while
let continuar;

do {
    let numeroA = parseInt(prompt("Ingrese Primer Numero"));
    let numeroB = parseInt(prompt("Ingrese Segundo Numero"));
    let operacion = prompt("Ingrese opreación  + - * / ");
    let continuar;

    function validarResultado(r) {
        if (isNaN(r)) {
            console.error("Ingrese solo números");
            return false;
        } else {
            return true;
        }
    }

    function calculadora(a, b, operacion) {
        if (validarResultado(a) && validarResultado(b)) {
            let resultado;
            switch (operacion) {
                case "+":
                    resultado = a + b;
                    console.log(" Suma es: " + resultado);
                    break;
                case "-":
                    resultado = a - b;
                    console.log(" Resta es: " + resultado);
                    break;
                case "*":
                    resultado = a * b;
                    console.log(" Multiplicacion es: " + resultado);
                    break;
                case "/":
                    resultado = a / b;
                    console.log(" División es: " + resultado);
                    break;
                default:
                    console.error(" Operación No Válida");
            }
        } else {
            console.error("Operacion cancelada debido a entradas invalidas");
        }
    }
    calculadora(numeroA, numeroB, operacion);
    /*
    do {
        continuar = prompt("Desea continuar (s/n)").toLowerCase();
        if (continuar !== 's' && continuar !== 'n') {
            console.error("Error!. Entrada no válida");
        }
    } while (continuar !== 's' && continuar != 'n');*/
//} while (continuar === 's');
    continuar=confirm("Desea realizar otra operacion?");
} while (continuar );
console.log("Gracias por usar la calculadora");
