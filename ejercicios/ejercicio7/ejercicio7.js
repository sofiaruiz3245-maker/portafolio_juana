// ejercicio7

 let can1, can2, can3, can_total,precio_total
 let frec,dia
 let A=600,AA=700,AAA=750

do{
     can1=parseInt(prompt("cantidad de huevos tipo A:"))
 }while(can1<0)
 do{
     can2=parseInt(prompt("cantidad de huevos tipo AA:"))
 }while(can2<0)
 do{
     can3=parseInt(prompt("cantidad de huevos tipo AAA:"))
 }while(can3<0)
 do{
     frec=parseInt(prompt("si es cliente frecuente digite 1, si no 0"))
 }while(frec!=1 && frec!=0)
 do{
     dia=parseInt(prompt("digite 1 si compro entre semana L-V,2 si compro el sabado, 3 si compro el domingo"))
 }while(dia<1 || dia>3)
 can_total=can1+can2+can3
 precio_total=(can1*A)+(can2*AA)+(can3*AAA)
 if(can_total>=30 && can_total<=45){
     if(frec==1 && dia==1){
         let aum=precio_total*0.05
         let desc1=precio_total*0.125
         document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc1+aum))
     }else if(frec==1 && dia==2){
         let desc2=precio_total*0.175
        document.write("por la compra de sus "+can_total+" huevos, ser cliente frecuente y comprar un sabado tiene un descuento del 17.5%  <br> precio total "+(precio_total-desc2))
     }else if(frec==1 && dia==3){
         let desc3=precio_total*0.125
         document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% y comprar un domingo <br> precio total "+(precio_total-desc3))
     }
     else if(frec==0 && dia==1){
         let aum4=precio_total*0.05
         let desc4=precio_total*0.10
         document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc4+aum4))
     }else if(frec==0 && dia==2){
         let desc5=precio_total*0.15
         document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar un sabado tiene el descuento del 5% <br> precio total "+(precio_total-desc5))
     }else if(frec==0 && dia==3){
         let desc6=precio_total*0.10
         document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% y comprar un domingo<br> precio total "+(precio_total-desc1+aum))
    }


 }else if(can_total>=46 && can_total<=70){
     if(frec==1 && dia==1){
         let aum=precio_total*0.05
         let desc1=precio_total*0.125
         document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc1+aum))
     }else if(frec==1 && dia==2){
         let desc2=precio_total*0.175
         document.write("por la compra de sus "+can_total+" huevos, ser cliente frecuente y comprar un sabado tiene un descuento del 17.5%  <br> precio total "+(precio_total-desc2))
     }else if(frec==1 && dia==3){
         let desc3=precio_total*0.125
        document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% y comprar un domingo <br> precio total "+(precio_total-desc3))
     }
     else if(frec==0 && dia==1){
         let aum4=precio_total*0.05
         let desc4=precio_total*0.10
         document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc4+aum4))
     }else if(frec==0 && dia==2){
         let desc5=precio_total*0.15
         document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar un sabado tiene el descuento del 5% <br> precio total "+(precio_total-desc5))
     }else if(frec==0 && dia==3){
         let desc6=precio_total*0.10
         document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% y comprar un domingo<br> precio total "+(precio_total-desc1+aum))
    }
}else if(can_total>=71 && can_total<=100){
     if(frec==1 && dia==1){
         let aum=precio_total*0.05
        let desc1=precio_total*0.125
         document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc1+aum))
     }else if(frec==1 && dia==2){
         let desc2=precio_total*0.175
         document.write("por la compra de sus "+can_total+" huevos, ser cliente frecuente y comprar un sabado tiene un descuento del 17.5%  <br> precio total "+(precio_total-desc2))
     }else if(frec==1 && dia==3){
         let desc3=precio_total*0.125
         document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% y comprar un domingo <br> precio total "+(precio_total-desc3))
     }
    else if(frec==0 && dia==1){
         let aum4=precio_total*0.05
         let desc4=precio_total*0.10
        document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc4+aum4))
     }else if(frec==0 && dia==2){
         let desc5=precio_total*0.15
         document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar un sabado tiene el descuento del 5% <br> precio total "+(precio_total-desc5))
     }else if(frec==0 && dia==3){
         let desc6=precio_total*0.10
        document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% y comprar un domingo<br> precio total "+(precio_total-desc1+aum))
     }
 }else if(can_total>100){
     if(frec==1 && dia==1){
         let aum=precio_total*0.05
         let desc1=precio_total*0.125
         document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc1+aum))
     }else if(frec==1 && dia==2){
         let desc2=precio_total*0.175
         document.write("por la compra de sus "+can_total+" huevos, ser cliente frecuente y comprar un sabado tiene un descuento del 17.5%  <br> precio total "+(precio_total-desc2))
     }else if(frec==1 && dia==3){
         let desc3=precio_total*0.125
         document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% y comprar un domingo <br> precio total "+(precio_total-desc3))
     }
     else if(frec==0 && dia==1){
        let aum4=precio_total*0.05
         let desc4=precio_total*0.10
         document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc4+aum4))
     }else if(frec==0 && dia==2){
         let desc5=precio_total*0.15
        document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar un sabado tiene el descuento del 5% <br> precio total "+(precio_total-desc5))
    }else if(frec==0 && dia==3){
         let desc6=precio_total*0.10
         document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% y comprar un domingo<br> precio total "+(precio_total-desc1+aum))
     }
 }else {
     if(frec==1 && dia==1){
         let aum=precio_total*0.05
         let desc1=precio_total*0.125
         document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc1+aum))
     }else if(frec==1 && dia==2){
         let desc2=precio_total*0.175
         document.write("por la compra de sus "+can_total+" huevos, ser cliente frecuente y comprar un sabado tiene un descuento del 17.5%  <br> precio total "+(precio_total-desc2))
     }else if(frec==1 && dia==3){
         let desc3=precio_total*0.125
         document.write("por la compra de sus "+can_total+" huevos y ser cliente frecuente tiene un descuento del 12.5% y comprar un domingo <br> precio total "+(precio_total-desc3))
     }
     else if(frec==0 && dia==1){
        let aum4=precio_total*0.05
         let desc4=precio_total*0.10
         document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar de L-V tiene un aumento del 5% <br> precio total "+(precio_total-desc4+aum4))
    }else if(frec==0 && dia==2){
         let desc5=precio_total*0.15
         document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% <br> por comprar un sabado tiene el descuento del 5% <br> precio total "+(precio_total-desc5))
     }else if(frec==0 && dia==3){
        let desc6=precio_total*0.10
         document.write("por la compra de sus "+can_total+" huevos y no ser cliente frecuente tiene un descuento del 10% y comprar un domingo<br> precio total "+(precio_total-desc1+aum))
     }
 }