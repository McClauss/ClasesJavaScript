/*
//almacena claves
let mensaje = "Hola desde CoderHouse";
localStorage.setItem('mensaje',mensaje);

//muestra claves
console.log(localStorage.getItem('mensaje'));

localStorage.setItem('numero',1);
localStorage.setItem('booleans',true);
*/
//////////////////////////////
/*
//un objeto se debe convertir en String
localStorage.setItem('Perro',JSON.stringify(perrito));

console.log(typeof perrito);
console.log(typeof JSON.stringify(perrito));

console.log(localStorage.getItem('Perro'));

const perritoComoString = localStorage.getItem('Perro');
console.log(perritoComoString);

const perritoComoObject = localStorage.getItem('Perro');
console.log(perritoComoObject);
*/

////////////////////////////////////////

//para eliminar las claves guardadas

//localStorage.removeItem('numero');
//localStorage.removeItem('booleans');

//limpia todo
//localStorage.clear();


///////////////////////////////////////

//para recorrer el local storage y mostrar por claves
/*
for (let i=0; i<localStorage.length;i++){
    let clave= localStorage.key(i);
    console.log("Pra la clave:  "+clave+"\nValor: "+localStorage.getItem(clave));
}

*/

////////////////////////
const guardarEnElLocalStorage = (clave,valor)=>{
    localStorage.setItem(clave,valor);
}

function Mascota(especie,nombre,edad, raza, color, peso){
    this.especie=especie,
    this.nombre=nombre,
    this.edad=edad,
    this.raza=raza,
    this.color=color,
    this.peso=peso
}

//const perrito = new Perro("Panela",4,"Mestizo","Amarillo",16.5);

//guardarEnElLocalStorage('Perro',JSON.stringify(perrito));

//guardarEnElLocalStorage(perrito.nombre,JSON.stringify(perrito));


const perrito = new Mascota("Perro","Panela",4,"Mestizo","Amarillo",16.5);
const perrito1= new Mascota("Perro","Pepito",7,"Labrador","Chocolate",18.5);
const gatito= new Mascota("Gato","Michi",10,"Persa","Gris",5.2);
const gatito1= new Mascota("Gato","Tom",10,"Mestizo","Negro",8.2);

const arrayDeMascotas=[];

arrayDeMascotas.push(perrito);
arrayDeMascotas.push(perrito1);
arrayDeMascotas.push(gatito);
arrayDeMascotas.push(gatito1);

console.log(arrayDeMascotas);

for (const mascota of arrayDeMascotas){
    guardarEnElLocalStorage(mascota.nombre,JSON.stringify(mascota));
}

for (const mascota of arrayDeMascotas){
    guardarEnElLocalStorage('Mascota',JSON.stringify(mascota));
}

for (const mascota of arrayDeMascotas){
    guardarEnElLocalStorage('Mascotas',JSON.stringify(arrayDeMascotas));
}