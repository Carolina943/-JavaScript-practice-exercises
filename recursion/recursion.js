/*
Define una función recursiva esPar (isEven) que corresponda a esta descripción. La
función debe aceptar un solo parámetro (un número entero, positivo) y devolver
un Booleano.
Pruébalo con 50 y 75. Observa cómo se comporta con -1. Por qué? Puedes
pensar en una forma de arreglar esto?
Por ahora con -1 me sale false. La solucion a este problema es false segun
el libro.
*/


function esPar(numero){
  if(numero%2==0){
    return true;
  }
  if(numero%2!==0){
    return false;
  }
}

esPar(75);
