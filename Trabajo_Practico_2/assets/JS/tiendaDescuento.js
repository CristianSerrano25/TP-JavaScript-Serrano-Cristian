let cantArticulos = parseInt(prompt("Ingrese primera numero de articulos: "));
let precioArticulos = parseInt(prompt("Ingrese precio de articulos: "));
let totalVenta = cantArticulos * precioArticulos;


if (isNaN(cantArticulos && precioArticulos)) {
    console.log("Ingrese Valores Validos")
} else if (cantArticulos < 10 || totalVenta < 20000) {
    console.log("No es posible realizar el descuento");
} else if (cantArticulos > 10 && totalVenta < 20000) {
    let precioDescuento = totalVenta * 0.85;
    console.log("El total de la compra a pagar con descuento es de: " + precioDescuento);
}
