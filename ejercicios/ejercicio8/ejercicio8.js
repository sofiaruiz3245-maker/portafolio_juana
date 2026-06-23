// ejericio8

 let numero;
 let cantidad = 0;

 while (true) {
     numero = Number(prompt("Ingrese un número par"));

     if (numero % 2 == 0) {
         cantidad++;
     } else {
         break;
     }
 }

 document.write("Cantidad de números pares ingresados: " + cantidad);