// ejercicio9

 let contador = 1;

let ajedrez = 0;
 let atletismo = 0;
 let futbol = 0;
 let gimnasia = 0;
 let natacion = 0; 

 while (contador <= 400) {

         let deporte = prompt(
             "Persona " + contador +
             "\n1. Ajedrez" +
             "\n2. Atletismo" +
             "\n3. Futbol" +
            "\n4. Gimnasia" +
             "\n5. Natacion"
         );

         if (deporte == 1) {
             ajedrez++;
         } else {
             if (deporte == 2) {
                 atletismo++;
             } else {
                 if (deporte == 3) {
                     futbol++;
                 } else {
                     if (deporte == 4) {
                         gimnasia++;
                     } else {
                         if (deporte == 5) {
                             natacion++;
                         }
                     }
                 }
             }
         }

         contador++;
 }

     document.write("AJEDREZ: " + ajedrez + "<br>");
     document.write("ATLETISMO: " + atletismo + "<br>");
     document.write("FUTBOL: " + futbol + "<br>");
     document.write("GIMNASIA: " + gimnasia + "<br>");
     document.write("NATACION: " + natacion + "<br>");