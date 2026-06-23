//  ejercicio 13

     let numeros = [5, 10, 15, 20, 25];
     let suma = 0;
     let i = 0;
     let cantidad = 5;
     while (i < cantidad) {
         suma = suma + numeros[i];
         i = i + 1;
     }
     document.write("La suma de los números es: " + suma);