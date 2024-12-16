/*
//con const me aseguro queno va a cambiar el tipo de dato 

const miArrayDeNumeros=[1,2,3,4,1.2,-1,0,2.2];

console.log(miArrayDeNumeros);

//let permitiria reasignar

console.log(typeof miArrayDeNumeros);

//para agregar datos al array uso método push
//Arrays tienen sus propios métodos

//push agrega elementos al array
miArrayDeNumeros.push(100);
console.log(miArrayDeNumeros);

//pup método que elimina último elemento
miArrayDeNumeros.pop();
console.log(miArrayDeNumeros);

//método que elimina el primer elemento, cambia el índice. NO es recomendable
miArrayDeNumeros.shift();
console.log(miArrayDeNumeros);

//método que agrega elemento en el primer índice. NO es recomendable
miArrayDeNumeros.unshift(1);
console.log(miArrayDeNumeros);

//método que devuelve cantidad de elementos del array
console.log(miArrayDeNumeros.length);

//usando For
for (let i=0; i<miArrayDeNumeros.length;i++){
    console.log(miArrayDeNumeros[i]);
}

//método join convierte array en un string. Puedo poner cualquier separador entre sus elementos
console.log(miArrayDeNumeros.join(", "));

//método indexOf retorna el índice del elemento que le indique. Retorna -1 si no existe el valor
console.log(miArrayDeNumeros.indexOf(2.2));

//método includes, retorna un booleano para indicar si existe el dato o no
console.log(miArrayDeNumeros.includes(500));


//Array de Strings
const miArrayDeStrings=["Hola","Mundo","Coderhouse"];
for (let i=0; i<miArrayDeStrings.length;i++){
    console.log("En el indcie "+i+" esta el valor: "+miArrayDeStrings[i]);
}

//método para ordernar alfabeticamente, pero mueve los índices. NO es recomendable
console.log(miArrayDeStrings.sort());

//método para ordernar alfabeticamente en forma descendente, pero mueve los índices. NO es recomendable
console.log(miArrayDeStrings.sort().reverse());
*/

/*
////////////////////////Objetos////////////////////////////

//declaro el objeto

const producto={
    id:1,
    nombre:"Azucar",
    precio:1200
}

console.log(producto);


//array de muchos productos

const productos = [
    {
        id: 1,
        nombre: "Azucar",
        precio: 1200
    },
    {
        id: 2,
        nombre: "Pan",
        precio: 800
    },
    {
        id: 3,
        nombre: "Leche",
        precio: 1500
    },
    {
        id: 4,
        nombre: "Milo",
        precio: 2000
    },
    {
        id: 5,
        nombre: "Çafé",
        precio: 1000
    }
];
console.log(productos);

//imprimir solo el primer objeto del array de objetos

console.log(productos[0]);

//acceder a una clave del objeto
console.log(productos[0].id);
console.log(productos[0].nombre);
console.log(productos[0].precio);

//Agregar objeto nuevo al array y puedo agregar un atributo al objeto
productos.push({
    id: 6,
    nombre: "Te",
    precio: 900,
    stock: 1200
});
console.log(productos);


//agregar producto nuevo con push
const productoNuevo={
    id:7,
    pais:"Chile",
    region:"Metropolitana",
    comuna: "Ñuñoa",
    nombre: "Cafetera",
    percio: 15000,
    stock:10
}

productos.push(productoNuevo);
console.log(productos);
*/


////////////////////////Clases////////////////////////////
//clase producto con su constructor y método parseado a float y fijado a dos decimales
class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    sumarIva() {
        this.precio = parseFloat((this.precio * 1.19).toFixed(2));
    }
}

//creo los productos

//hago instancia de la clase
const productos = [];
//llamo constructor
productos.push(new Producto(1, "Leche", 2000, 20));
productos.push(new Producto(2, "Café", 5000, 10));
productos.push(new Producto(3, "Pan", 500, 100));

//crear un nuevo producto, sumarle Iva y mostrarlo por consola
const productoX = new Producto(4, "Te", 950, 50);
productoX.sumarIva();
console.log(productoX);
console.log(productoX.precio);

//agregar el producto nuevo al array de productos
productos.push(productoX);
console.log(productos);


//uso método sumarIva e imprimo con las comillas invertidas AltGr + tecla acento o ALt+96

for (const producto of productos) {
    producto.sumarIva();
    console.log(`El Producto con ID: ${producto.id} es: ${producto.nombre}. El precio de ${producto.nombre} es $${producto.precio}.- y existen ${producto.stock} Unidades `);
}
