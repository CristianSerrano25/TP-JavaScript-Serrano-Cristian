let nota1 = parseInt(prompt("Ingrese primera nota del 1 al 10"));
let nota2 = parseInt(prompt("Ingrese segunda nota del 1 al 10"));
let nota3 = parseInt(prompt("Ingrese tercera nota del 1 al 10"));

if (isNaN(nota1)) {
    console.log("Debe ingresar un numero valido")
} else if (nota1 <= 0 || nota1 > 10 || nota2 <= 0 || nota1 > 10 || nota3 <= 0 || nota1 > 10) {
    console.log("Nota invalida")
} else {
    let promedio = parseInt((nota1 + nota2 + nota3) / 3);
    console.log("El primedio es: " + promedio);

    switch (true) {
        case promedio >= 1 && promedio <= 3:
            console.log("Nota Insuficiente")
            break;
        case promedio >= 4 && promedio <= 5:
            console.log("Nota Regular")
            break;
        case promedio >= 6 && promedio <= 7:
            console.log("Nota Buena")
            break;
        case promedio >= 8 && promedio <= 9:
            console.log("Nota Muy Buena")
            break;
        case promedio =10 :
            console.log("Nota Sobresaliente")
            break;
        default: "Invalido"
            break;
    }
}
