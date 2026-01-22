// Variables tipo Number
let edad = 20; 
let edad2 = 31;

// Variables tipo String
let nombre = "Augusto";
let nombre2 = 'Elias';


// Variables tipo Boolean
let esEstudiante = true;
let tieneTrabajo = false;

// Valores en consola
console.log("Edad:", edad);
console.log("Edad 2:", edad2);
console.log("Nombre:", nombre,);
console.log("Nombre2:", nombre2,);
console.log("¿Es estudiante?", esEstudiante);
console.log("¿Tiene trabajo?", tieneTrabajo);

if (edad < 21) {
    console.log(nombre + " es Estudiante.");
} else {
    console.log(nombre + " Tiene Trabajo.");
}   
if (edad2 >= 21) {
    console.log(nombre2 + " Tiene Trabajo.");
} else {
    console.log(nombre2 + " es Estudiante.");
}   