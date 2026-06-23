function validarHorario(fecha){

let hora=fecha.getHours();

return hora>=5 && hora<24;

}

function ajuste50(valor){

return Math.ceil(valor/50)*50;

}

function picoPlaca(placa,fecha){

let ultimo=placa.slice(-1);

let dia=fecha.getDay();

let restricciones={
1:["1","2"],
2:["3","4"],
3:["5","6"],
4:["7","8"],
5:["9","0"]
};

return restricciones[dia]?.includes(ultimo);

}

function calcular(){

let tipo=
document.getElementById("tipo").value;

let placa=
document.getElementById("placa").value.toUpperCase();

let ingreso=
new Date(
document.getElementById("ingreso").value
);

let salida=
new Date(
document.getElementById("salida").value
);

let dinero=Number(
document.getElementById("pago").value
);

if(!placa){

alert("Ingrese placa");

return;

}

if(salida<=ingreso){

alert("Hora inválida");

return;

}

if(
!validarHorario(ingreso)||
!validarHorario(salida)
){

alert("Fuera del horario");

return;

}

let minutos=
Math.ceil(
(salida-ingreso)/(1000*60)
);

let tarifa=
tipo==="Automóvil"
?125
:95;

let total=
minutos*tarifa;

if(
tipo==="Automóvil" &&
picoPlaca(placa,ingreso)
){

total*=0.75;

}

total=ajuste50(total);

if(dinero<total){

alert("Dinero insuficiente");

return;

}

let cambio=
dinero-total;

let billetes=[
50000,
20000,
10000,
5000,
2000,
1000,
500,
200,
100,
50
];

let devolver=[];

for(let b of billetes){

let cantidad=
Math.floor(cambio/b);

if(cantidad>0){

devolver.push(
`${cantidad} x ${b}`
);

cambio%=b;

}

}

let registro={
fecha:new Date()
.toLocaleDateString(),

tipo,

placa,

tiempoHoras:
(minutos/60)
.toFixed(2),

valor:total
};

let historial=
JSON.parse(
localStorage.getItem(
"parqueadero"
)
)||[];

historial.push(registro);

localStorage.setItem(
"parqueadero",
JSON.stringify(
historial
)
);

document
.getElementById(
"resultado"
)
.innerHTML=`

<h4>Total:
$${total}</h4>

<p>
Tiempo:
${minutos} min
</p>

<p>
Cambio:
${devolver.join(", ")}
</p>

`;

}