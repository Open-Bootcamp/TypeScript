// Esto un comentario en TS

import { type } from "os";

/**
 * Esto es un comentario
 * Multilínea
 */

console.log("Hola Martín");
console.log("Adiós Martín");


// Declaración de Variables:
var nombre: string = 'Martín';

console.log("Hola, " + nombre);
console.log("¿Qué tal", nombre, "?");
console.log(`¿Cómo han ido las vacaciones, ${nombre} ?`);

let email = "martin@imaginagroup.com"; // Variable de ámbito local
console.log(`El Email de ${nombre} es ${email}`);

const PI: number = 3.1416;

var apellidos: any = "San José"; // Tipo any hace que la variable pueda cambiar de tipo
apellidos = 3;

var error: boolean;
error = false;

console.log(`¿Hay error?: ${error}`);


// Instanciación múltiple de variables

let a:string,b:boolean,c:number; // intancia 3 variables sin valor inicial
a = "TypeScript";
b = true;
c = 8.9;

// BuiltIn Types: number, string, boolean, void, null y undefined

// Tipos más complejos

// Lista de cadenas de texto
let listaTareas: string[] = ["Tarea 1", "Tarea 2"];

// Combinación de tipos en listas
let valores: (string | number | boolean)[] = [false, "Hola", true, 56];

// Enumerados

enum Estados {
    "Completado" = "C",
    "Incompleto" = "I",
    "Pendiente" = "P"
}

enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}

let estadoTarea: Estados = Estados.Completado;
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo;


// Interfaces
interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

// podemos crear variables que sigan la interface Tarea

let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10
}

console.log(`Tarea: ${tarea1.nombre}`);


// Asignación múltiple de variables

let miTarea = {
    titulo: 'Mi tarea',
    estado: Estados.Completado,
    urgencia: 1
}

// Declaración 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;

// ** Factor Spread (Propagación)

// En asignación de variables
let {titulo, estado, urgencia } = miTarea;

// En listas
let listaCompraLunes: string[] = ["Leche", "Patatas"]
let listaCompraMartes: string[] = [...listaCompraLunes, "Pan", "Huevos"];
let listaCompraMiercoles: string[] = ["Carne", "Pescado"]
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles]

// En Objetos

let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bearer1283612783"
}

// Cambiar un valor por propagación
let nuevoEstado = {
    ...estadoApp,
    session: 4
}

let edad = 4;

let estudiante = {
    nombre : "Martín",
    edad // edad: edad
}


// Types de TypeScript
type Producto = {
    precio: number,
    nombre: string,
    anio: number
}

let coche: Producto = {
    nombre: "Audi",
    precio: 45000,
    anio: 2010
}


// ** Condicionales:

// Operadores ternarios
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`);


// If - else
if(error){
    console.log("Hay un error");
}else {
    console.log("No hay un error");
}

// If - else if - else
if(coche.anio < 2010){
    console.log(`Coche: ${coche.nombre} es viejo`)
}else if(coche.anio === 2010){
    console.log(`Coche: ${coche.nombre} es del 2010`)
}else {
    `Coche: ${coche.nombre} es nuevo`
}


// Switch
switch (tarea1.estado) {
    case Estados.Completado:
        console.log("La tarea está completada");
        break;
    case Estados.Incompleto:
        console.log("La tarea no está completada");
        break;
    case Estados.Pendiente:
        console.log("La tarea está pendiente de comprobarse");
        break;
    default:
        break;
}


// ** Bucles

let listaTareasNueva: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Completado,
        urgencia: 15
    }
]

// For Clásico
for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea.nombre}`);
}

// Foreach    
listaTareasNueva.forEach(
    (tarea: Tarea, index: number) => {
        console.log(`${index} - ${tarea.nombre}`);
    }
);


// Bucles While
while (tarea1.estado !== Estados.Completado) {
    if(tarea1.urgencia == 20){
        tarea1.estado = Estados.Completado;
        break;
    }else{
        tarea1.urgencia ++;
    }
}

// DO While ( se ejecuta al menos una vez)
do {
    tarea1.urgencia ++;
    tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);















































 








