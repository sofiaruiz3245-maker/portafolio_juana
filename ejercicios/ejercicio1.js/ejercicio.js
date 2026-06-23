//  ejercicio1
 let unidad, cantidad, mi, km, mt;
 unidad = parseInt(prompt('Digite 1 para Millas - 2 para Kilometros - 3 para Metros'));
cantidad = prompt('Digite el valor a convertir');
switch(unidad){
    case 1:
         km = cantidad * 1.6093;
          mt = cantidad + 1609.34;
         document.write(cantidad + ' Millas, equivalen a'+ km + 'Kilometros, y a'+ mt + 'Metros');
         break;
     case 2: 
          mi = cantidad + 0.621371;
         mt = cantidad * 1000;
          document.write(cantidad + ' kilometros, equivalen a' + mi + 'Millas, y a '+ mt + 'Metros' );
          break;

     case 3:
         mi = cantidad * 0.000621371;
         km = cantidad / 1000;
          document.write(cantidad + ' Metros, equivalen a' + mi + 'Millas, y a '+ km + 'Kilometros' );
          break;

    default:
                 document.write('Valor Incorrecto');
        break;
}   