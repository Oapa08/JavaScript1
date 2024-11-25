// Precio base del producto
const precioBase = 1200;
let cantidad = 0;
let totalPagar = 0;

// Captura de variables del DOM
let precioBaseSpan = document.querySelector(".precio-base");
let cantidadSpan = document.querySelector(".contador");
let totalPagarSpan = document.querySelector('.pago-total');

// Mostrar precio inicial en la página
precioBaseSpan.innerHTML = precioBase;

// Captura de botones
const botonMas = document.querySelector('#btn_mas');
const botonMenos = document.querySelector('#btn_menos');

// Evento para aumentar la cantidad
botonMas.addEventListener('click', () => {
    cantidad++;
    actualizarCantidadYTotal();
});

// Evento para disminuir la cantidad
botonMenos.addEventListener('click', () => {
    if (cantidad > 0) {
        cantidad--;
    }
    actualizarCantidadYTotal();
});

// Función para actualizar cantidad y total
function actualizarCantidadYTotal() {
    cantidadSpan.innerHTML = cantidad;
    totalPagar = precioBase * cantidad;
    totalPagarSpan.innerHTML = totalPagar.toFixed(2);  // Mostrar total con dos decimales
}
