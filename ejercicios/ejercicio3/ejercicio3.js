// ejercicio3
 let a, b, c, x1, x2, disc;
 a = parseFloat(prompt(" valor de a: "));
b = parseFloat(prompt(" Valor de b: "));
c = parseFloat(prompt(" valor de c: "));
 disc = b*b - (4 *a* c);
 if (disc === 0){
   document.write('Solo hay una solución');
    x1 = (-b + Math.sqrt(disc)) /2 *a;
    document.write('La solución es: ' + x1);
} else if (disc>0){
    x1 = (-b + Math.sqrt(disc)) /2 *a;
    x2 = (-b - Math.sqrt(disc)) /2 *a;
     document.write('Solución 1: ' + x1);
     document.write('<br>');
     document.write('Solución 2: '+ x2);
 }else{
     document.write('La solucion incluye números imaginarios');
 }