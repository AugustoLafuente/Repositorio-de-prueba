// Pedir un numero y sumarle 3 en cada repeticion hasta llegar a 30

let i = parseInt(prompt("Ingrese un numero:"));

for (let i = 0; i < 30; i+=3) {
    console.log("El nuevo valor es: " + i);
    
}


// Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

let texto = prompt("Ingrese un texto (o 'ESC' para salir):");

while (texto.toUpperCase() !== "ESC") {
    alert("Texto actual: " + texto);
    texto += " - agregado";
    texto = prompt("Ingrese un texto (o 'ESC' para salir):");
}

//Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces

let cantidad = parseInt(prompt("Ingrese un numero para repetir 'Hola':"));

for (let i = 0; i < cantidad; i++) {
    console.log("Hola");
}

