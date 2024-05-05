let numero1 = parseInt(prompt("Ingresar el primer numero: "));
let numero2 = parseInt(prompt("Ingresar el primer segundo: "));
let numero3 = parseInt(prompt("Ingresar el primer tercer: "));
console.log("Los numeros ingresados son: " + numero1 + " " + numero2 + " " + numero3);

let primerNum, segundoNum, tercerNum;

if (numero1 < numero2 && numero1 < numero3) {
    primerNum = numero1;
    if (numero2 < numero3) {
        segundoNum = numero2;
        tercerNum = numero3;
    } else {
        segundoNum = numero3;
        tercerNum = numero2;
    }
} else if (numero2 < numero1 && numero2 < numero3) {
    primerNum = numero2;
    if (numero1 < numero3) {
        segundoNum = numero1;
        tercerNum = numero3;
    } else {
        segundoNum = numero3;
        tercerNum = numero1;
    }
} else {
    primerNum = numero3;
    if (numero1 < numero2) {
        segundoNum = numero1;
        tercerNum = numero2;
    } else {
        segundoNum = numero2;
        tercerNum = numero1;
    }
}

console.log("Lo numero en orden ascendente son: " + primerNum + " " + segundoNum + " " + tercerNum);


