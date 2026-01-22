function saludar (nombre) {
    console.log(`Hola ${nombre}, bienvenido a la clase en vivo`);
}
saludar("Elias");
saludar("Ana");
saludar("Luis");

function despedir (nombre) {
    console.log(`Adiós ${nombre}, gracias por venir a la clase en vivo!`);
}
despedir("Elias");
despedir("Ana");
despedir("Luis");

function sumar (a, b) {
    return a + b;
} 
let resultado = sumar(3, 5);
console.log(resultado);

function calcularAreaTriangulo (base, altura) {
    return (base * altura) / 2;
}
console.log(`El área del triángulo es: ${calcularAreaTriangulo(4, 6)}`);

function calcularPrecioFinal (precio, descuento) {
    return precio - (precio * descuento / 100);
}

let precioRemera = calcularPrecioFinal(27000, 15);
let precioPantalon = calcularPrecioFinal(45000, 20);
let precioGorra = calcularPrecioFinal(15000, 10);

console.log(`El precio final de la remera es: $${precioRemera}`);
console.log(`El precio final del pantalón es: $${precioPantalon}`);
console.log(`El precio final de la gorra es: $${precioGorra}`);

console.log("A" - 2); 
console.log(true||false);

