/*
El capítulo anterior introdujo la función estándar Math.min que devuelve su
argumento más pequeño. Nosotros podemos construir algo como eso ahora.
Escribe una función min que tome dos argumentos y retorne su mínimo.
*/
let numero1 = prompt("Introduce el primer numero");
let numero2 = prompt("Introduce el segundo numero");

function encontrarMin(){
let  resultado = Math.min(numero1,numero2);
 document.write(" El minimo es " + resultado );
}
encontrarMin();
