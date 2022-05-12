/*
Puedes obtener el N-ésimo carácter, o letra, de un string escribiendo "string"[
N]. El valor devuelto será un string que contiene solo un carácter (por ejemplo,
"f"). El primer carácter tiene posición cero, lo que hace que el último se
encuentre en la posición string.length - 1. En otras palabras, un string de
dos caracteres tiene una longitud de 2, y sus carácteres tendrán las posiciones
0 y 1.
Escribe una función contarFs que tome un string como su único argumento
y devuelva un número que indica cuántos caracteres “F” en mayúsculas haya
en el string.
Despues, escribe una función llamada contarCaracteres que se comporte
como contarFs, excepto que toma un segundo argumento que indica el carácter
que debe ser contado (en lugar de contar solo caracteres “F” en mayúscula).
Reescribe contarFs para que haga uso de esta nueva función.
*/


function contarFs(cadena){
  let contar = 0;
  let letraF = "F";
  for(i=0; i < letraF.length; i++){
    for(let x = 0; x < cadena.length; x++){
    if(cadena[x]==letraF[i]){
      contar+=1;
    }
    }
  }
  return contar;
}

console.log(contarFs("FuerZFFq"));

/*
function contarFs(cadena) {
 let contar = 0;
 let letraF = "F";
 for (var i = 0; i < letraF.length; i++) {
 for (var x = 0; x < cadena.length; x++) {
 if(cadena[x]==mayusculas[i]){
 contar+=1;
 }
 }
 }
 return contar;
}

console.log(contarFs("aFzF"));
*/
