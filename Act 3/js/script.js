//Funcion que solicite los datos de entrada al usuario
function solicitarDatos() {
    let nombre = prompt("Ingrese su nombre:");
    let edad = parseInt(prompt("Ingrese su edad:"));
    return { nombre, edad };
}   

//Funcion que procese la informacion obtenida
function procesarDatos(datos) {
    let mensaje = "";
    if (datos.edad >= 18) {
        mensaje = "eres mayor de edad.";
    } else {
        mensaje = "eres menor de edad.";
    }
    return `Hola ${datos.nombre}, ${mensaje}`;
}

//Funcion que muestre los resultados final al usuario
function mostrarResultado(resultado) {
    if (resultado.includes("menor")) {
        alert(resultado + " No podes ingresar al bar");
        console.log(resultado + " No podes ingresar al bar");
        return;
    } 
    else {
        alert(resultado + " Podes ingresar al bar");
        console.log(resultado + " Podes ingresar al bar");
    }
}

//Algoritmo principal (llamadas en orden correcto)
function ejecutarAlgoritmo() {
    const datos = solicitarDatos();
    const resultado = procesarDatos(datos);
    mostrarResultado(resultado);
}

// Ejecución del algoritmo
ejecutarAlgoritmo();


// Supongamos que tenemos el siguiente array de números
  const numeros = [10, 20, 30, 40, 50];
// Para recorrer este array usaremos un bucle for
for (let i = 0; i < numeros.length; i++) {      
console.log(numeros[i]);
}