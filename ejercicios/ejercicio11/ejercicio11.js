// ejercicio11
     let numero;
     let cantidad = 0;

     numero = ParseInt(prompt("Ingrese un número"));

     while (numero % 2 == 0) {

         cantidad = cantidad + 1;

         numero = ParseInt(prompt("Ingrese otro número"));
     }

     document.write("Cantidad de números pares ingresados: " + cantidad);
