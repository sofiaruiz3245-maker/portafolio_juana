// ejercicio5
 let pos=0,neg=0,cero=0,tem
while(true){
    tem=(prompt("ingrese una temperatura:"))
         if (tem ==99 && tem ==99){
        break
     }else if(tem>0){
         pos++
    }else if(tem<0){
        neg++
     }else{
        cero++
    }
    tem=(prompt("ingrese una temperatura:"))
}
document.write("temperaturas mayores a 0: "+ pos+"<br>")
 document.write("temperaturas iguales a 0: "+ cero+"<br>")
 document.write("temperaturas menores a 0: "+ neg)