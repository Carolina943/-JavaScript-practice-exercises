/*
Escribe una función rango que tome dos argumentos, inicio y final, y
retorne un array que contenga todos los números desde inicio hasta (e incluyendo)
final.
*/

let array =[];

function rango(inicio,final){
  for(i = inicio; i<= final; i++){
    array.push(i);
  }
   document.write(array + "</br>");
}

rango(0,20);

/*
Luego, escribe una función suma que tome un array de números y retorne
la suma de estos números. Ejecuta el programa de ejemplo y ve si realmente
retorna 55.
*/


let array =[];

function rango(inicio,final){
  contador = 0;
  for(i = inicio; i<= final; i++){
  array.push(i);
  contador+=i;
  console.log(contador);
  }

   document.write(contador);
}



rango(1,10);


/*
Como una misión extra, modifica tu función rango para tomar un tercer
argumento opcional que indique el valor de “paso” utilizado para cuando construyas
el array. Si no se da ningún paso, los elementos suben en incrementos
de uno, correspondiedo al comportamiento anterior. La llamada a la función
rango(1, 10, 2) deberia retornar [1, 3, 5, 7, 9]. Asegúrate de que también
funcione con valores de pasos negativos para que rango(5, 2, -1) produzca
[5, 4, 3, 2].
*/


let array = [];

function paso(inicio, final){
  for (i=inicio; i < final; i++){
    contador= final - i;
     array.push(contador)
  }
  document.write(array);
}

paso(1,7)
