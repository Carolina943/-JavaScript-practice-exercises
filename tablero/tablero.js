/*
Escribe un programa que cree un string que represente una cuadrícula de 8 ×
8, usando caracteres de nueva línea para separar las líneas. En cada posición
de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de
formar un tablero de ajedrez.
*/


for (let contador = 0; contador < 8 ; contador++)
{
  for(let tablero = 0 ; tablero < 8; tablero++)
  {
    if((contador+tablero)%2==0)
    {
        document.write("#");
    }
    if((contador + tablero)%2!==0)
    {
       document.write(" ");
    }
  }
      document.write("<br>");
}
