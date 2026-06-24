//ejercicio 14 Diseñe un script que vaya leyendo números y guardándolos en un array. Una vez lleno mostrará el array y deberá decir cuantos números son pares y cuantos son impares. La entrada de datos termina cuando el usuario teclea 0 o un valor no numérico.

let numeros = []
let pares = 0
let impares = 0
while (true) {
    let num = parseInt(prompt("Ingrese un número (0 para terminar):"))
    if (num == 0) {
        break
    }
    numeros.push(num)//para agg al final de la lista
    if (num % 2 == 0) {
        pares++
    } else {
        impares++
    }
}
document.write("Números ingresados:<br>"+
    numeros.join(", ")/*.join para separar los numeros de la lista pro un (,)*/+
    "<br><br> Cantidad de números pares: "+pares+
    "<br>Cantidad de números impares: " + impares)
