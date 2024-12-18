/////////////////////////////////////////////////////////////
///////////////////////Repaso Arrays////////////////////////

/*
//arrays numericos
let numeros = [10,2,13,404];

console.log("Sin ordenar queda: "+ numeros);
console.log(numeros[2]);

numeros.sort((a,b)=>a-b);//Uso de sort para ordenar numeros
console.log("Ordenado queda: "+numeros);
numeros.sort((a,b)=>b-a);//Uso de sort para ordenar decreciente numeros
console.log("Ordenado Decreciente queda: "+numeros);

//arrays strings
let palabras = ["Auto","moto","casa","Bici"];

palabras.push("Patineta");//Inserta elemento al final del arreglo
let indice = palabras.indexOf('Casa');//Devuelve el indice de una posicion del array
let contiene = palabras.includes('Auto');//Verifica si existe el valor en el arreglo

console.log("Sin Ordenar queda: "+palabras);
console.log("Ordenado queda: "+palabras.sort());//Uso de sort para ordenar String
console.log("Ordenado sin Prioridad Mayusculas queda: "+palabras.sort((a,b)=>a.localeCompare(b)));//Uso de sort para ordenar String sin prioridad Mayusculas
console.log("Ordenado Decreciente queda: "+palabras.sort().reverse());//Uso de sort para ordenar String Decreciente

console.log(palabras[0]);
console.log("Indice es "+indice);
console.log("Auto Existe? "+contiene);

//imprimir arrays con separador
console.log("Impresion array con separador (-) "+palabras.join('-'));


//arrays matriz
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(matriz);
console.log(matriz[0][1]);


*/

/////////////////////////////////////////////////////////////
///////////////////////Repaso Objetos////////////////////////

//Objeto Literal
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Santiago de Chile"
};

console.log("***************Objeto Literal****************");
console.log("Nombre es: "+persona.nombre+"\nSu edad es: "+persona.edad+"\nSu ciudad es: "+persona.ciudad);

//Array de Objetos
let arrayObjetos=[];

arrayObjetos.push({id:1, nombre:"producto 1"});
arrayObjetos.push({id:2, nombre:"producto 2"});
arrayObjetos.push({id:3, nombre:"producto 3"});
console.log("************Array de Objetos***************");
console.log(arrayObjetos);

console.log("************Imprimiendo con un For***************");
for(let objeto of arrayObjetos){
    console.log(objeto.nombre);
}

//Array de Objetos Ejemplo 2


const usuarios = [];
usuarios.push({ nombre: "Ana", edad: 55 });
usuarios.push({ nombre: "Luis", edad: 30 });

console.log("************Array de Objetos Ejemplo 2***************");
console.log(usuarios);

//ordenando por un campo del objeto
usuarios.sort((a, b) => a.edad - b.edad);
console.log(usuarios);

//filtrando busqueda
const mayoresDe25 = usuarios.filter(usuario => usuario.edad > 40);
console.log(mayoresDe25);

//para encontrar un dato

const luis = usuarios.find(usuario => usuario.nombre === "Luis");
console.log(luis);
