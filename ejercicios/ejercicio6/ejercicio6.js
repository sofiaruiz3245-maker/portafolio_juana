// ejercicio6

 let radar,d1,d2,d3,d4,res
 radar=parseInt(prompt("ingrese 4 numeros: "))
  d4=radar%10
  res=Math.trunc(radar/10)
  d3=res%10
 res=Math.trunc(res/10)
  d2=res%10
  res=Math.trunc(res/10)
  d1=res%10
 res=Math.trunc(res/10)
 if(d1%2 !='0'){
     document.write("No hay ninguna nave en el aire, se aproxima ") 
  }else if (d1+=2){
      document.write("hay una nave en el aire,  se aproxima ")
     }
  switch(d2){
 case 0:document.write("dirigible ");break
  case 1:document.write(" militar ");break
  case 2:document.write("avión civil de carga ");break
  case 3:document.write("avión civil de pasajeros ");break
  case 4:document.write("nave sin permiso ");break
  case 5:document.write("nave de supertransporte ");break
  case 6:document.write("nave enemiga ");break
  case 7:document.write("avión mixto ");break
  case 8:document.write("helicóptero ");break
  case 9:document.write("globo aerostático ");break
  }
  document.write(" en una distancia de:  "+ d3 + " km ")
  if(d4==0 || d4==1){
      document.write("al norte")
  }else if(d4==2 ||d4==3){
      document.write("al sur")
 }else if(d4==4||d4==5){
      document.write("al oriente")
 }else if(d4==6 ||d4==7){
      document.write("al occidente")
  }else if(d4==8 ||d4==9){
      document.write("desconocido")
  }else{
      document.write("su valor no conside.")    
  }