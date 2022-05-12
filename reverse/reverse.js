/*
Los arrays tienen un método reverse que cambia al array invirtiendo el orden
en que aparecen sus elementos. Para este ejercicio, escribe dos funciones,
revertirArray y revertirArrayEnSuLugar. El primero, revertirArray, toma
un array como argumento y produce un nuevo array que tiene los mismos elementos
pero en el orden inverso. El segundo, revertirArrayEnSuLugar, hace lo
que hace el métodoreverse: modifica el array dado como argumento invirtiendo
sus elementos. Ninguno de los dos puede usar el método reverse estándar.
Pensando en las notas acerca de los efectos secundarios y las funciones puras
en el capítulo anterior, qué variante esperas que sea útil en más situaciones?
Cuál corre más rápido?
*/

function revertirArray(array){
  let salida = [];
  for(i = array.length -1; i >= 0; i--){
      salida.push(array[i]);
    }
    document.write(salida)
}

revertirArray(["gato", "perro"]);


let array = ["vaca", "cerdo", "pollo"];

function revertirArrayEnSuLugar(){
  let nuevoArray = [array[2],array[1],array[0]];
  console.log(nuevoArray)
}

revertirArrayEnSuLugar()
