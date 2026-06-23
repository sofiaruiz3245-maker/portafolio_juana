// ejercicio4
let a = parseFloat(prompt("Ingrese el valor de a: "));
let b = parseFloat(prompt("Ingrese el valor de b: "));
let c = parseFloat(prompt("Ingrese el valor de c: "));
 let discriminante = (b ** 2) - (4 * a * c);

 console.log("Discriminante:", discriminante);

if (discriminante === 0) {

    let x = (-b) / (2 * a);

     document.write("Solo existe una solución real: " + x);

 } else if (discriminante > 0) {

    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

     document.write("Existen dos soluciones reales:<br>");
     document.write("x1 = " + x1 + "<br>");
    document.write("x2 = " + x2);

 } else {

     let parteReal = (-b) / (2 * a);
     let parteImaginaria = Math.sqrt(-discriminante) / (2 * a);

     document.write("Existen dos soluciones imaginarias:<br>");

     document.write(
         "x1 = " + parteReal + " + " + parteImaginaria + "i<br>"
     );

    document.write(
         "x2 = " + parteReal + " - " + parteImaginaria + "i"
    );
}