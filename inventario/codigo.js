const btnAgregar = document.getElementById("btnAgregar");
const tablaBody = document.querySelector("#tabla tbody");
const totalGeneral = document.getElementById("totalGeneral");

btnAgregar.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const precio = parseFloat(document.getElementById("precio").value);

  if (!nombre || isNaN(cantidad) || isNaN(precio)) {
    alert("Por favor complete todos los campos.");
    return;
  }

  agregarProducto(nombre, cantidad, precio);
  limpiar();
});

function agregarProducto(nombre, cantidad, precio) {
  const tr = document.createElement("tr");

  tr.innerHTML = `
            <td>${nombre}</td>

            <td>
                <button class="menos">–</button>
                <span class="cant">${cantidad}</span>
                <button class="mas">+</button>
            </td>

            <td>
                $<span class="precio">${precio}</span>
                <button class="editarPrecio">✏️</button>
            </td>

            <td>$<span class="total">${(cantidad * precio).toFixed(
              2
            )}</span></td>

            <td><button class="eliminar">🗑️</button></td>
        `;

  tablaBody.appendChild(tr);
  recalcularTotal();
}

function limpiar() {
  document.getElementById("nombre").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("precio").value = "";
}

tablaBody.addEventListener("click", function (e) {
  const fila = e.target.closest("tr");

  if (e.target.classList.contains("mas")) {
    let cant = fila.querySelector(".cant");
    cant.textContent = parseInt(cant.textContent) + 1;
  }

  if (e.target.classList.contains("menos")) {
    let cant = fila.querySelector(".cant");
    let actual = parseInt(cant.textContent);
    if (actual > 0) cant.textContent = actual - 1;
  }

  if (e.target.classList.contains("editarPrecio")) {
    let precioSpan = fila.querySelector(".precio");
    const nuevo = prompt("Nuevo precio:", precioSpan.textContent);
    if (nuevo !== null && !isNaN(parseFloat(nuevo))) {
      precioSpan.textContent = parseFloat(nuevo);
    }
  }

  if (e.target.classList.contains("eliminar")) {
    fila.remove();
  }

  actualizarFila(fila);
  recalcularTotal();
});

function actualizarFila(fila) {
  const cant = parseInt(fila.querySelector(".cant").textContent);
  const precio = parseFloat(fila.querySelector(".precio").textContent);

  const total = fila.querySelector(".total");
  total.textContent = (cant * precio).toFixed(2);

  if (cant === 0) {
    fila.classList.add("low-stock");
  } else {
    fila.classList.remove("low-stock");
  }
}

function recalcularTotal() {
  let suma = 0;

  const totales = document.querySelectorAll("#tabla tbody .total");

  totales.forEach((t) => {
    const valor = parseFloat(t.textContent);
    if (!isNaN(valor)) {
      suma += valor;
    }
  });

  totalGeneral.textContent = "Total general: $" + suma.toFixed(2);
}
const selector = document.getElementById("nombre");
const preview = document.getElementById("previewProducto");

const imagenes = {
  none: "",
  cuadernos: "./images/descarga1.jpg",
  lapiz: "./images/descarga2.jpg",
  borrador: "./images/descarga3.png",
  pegante_en_barra: "./images/descarga4.jpg",
  carpetas: "./images/descarga5.jpg",
  marcadores: "./images/descarga6.jpg",
  tijeras: "./images/descarga7.jpg",
  juego_de_geometría: "./images/descarga8.jpg",
  corrector_en_cinta: "./images/descarga9.jpg",
  block_de_hojas_iris: "./images/descarga10.jpg",
  Resma_de_papel: "./images/descarga11.jpg",
  bolígrafos_portaminas: "./images/descarga12.jpg",
  plastilinas: "./images/descarga13.jpg",
  crayolas: "./images/descarga14.jpg",
  pinturas: "./images/descarga15.jpg",
  pinceles: "./images/descarga16.jpg",
  cartulinas: "./images/descarga17.jpg",
  silicona_liquida: "./images/descarga18.jpg",
  cinta: "./images/descarga19.jpg",
  maletas: "./images/descarga20.jpg",
  escarchas: "./images/descarga21.jpg",
  white_sears: "./images/white_sears.png"
};


selector.addEventListener("change", () => {
  preview.src = imagenes[selector.value];
});