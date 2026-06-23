 // ejercicio10

     let clave = "1234";
     let intento;
     let contador = 1;

     while (contador <= 3) {

         intento = prompt("Ingrese la contraseña");

         if (intento == clave) {
             document.write("Acceso concedido");
             contador = 4;
         } else {
            document.write("Acceso denegado");
             document.write("<br>");
             contador = contador + 1;
         }
     }

     if (intento != clave) {
         document.write("Alerta, intruso");
     }
