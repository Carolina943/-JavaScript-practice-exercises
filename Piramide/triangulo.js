/*
Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente
triángulo:
*/

/*Para eso debemos crear un ciclo for donde se tenga un contador. Este contador
empieza en 1, se repetira siempre y cuando las veces que se repita sea menor o
igual a 7 las veces que se sume al contador. Una vez conseguido esto debemos crear
otro ciclo para el contenido de la piramide.
*/

for (let i = 1; i <= 7;  i++){
  for(triangulo = 0; triangulo < i; triangulo++){
    document.write("#");
  }
  document.write("<br>");
}


//SOLUCION

for (let line = "#"; line.length < 8 ; line+="#")
console.log(line)
