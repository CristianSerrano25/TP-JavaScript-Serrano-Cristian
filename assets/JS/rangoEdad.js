let edad = parseInt(prompt("Ingrese su edad: "));
console.log("La edad ingresada es: "+edad)

if(edad>=1 && edad<=12){
    console.log("La persona es un niño")
}else if(edad>=13 && edad<=19){
    console.log("La persona es un adolescente")
}else if(edad>=20 && edad<=59){
    console.log("La persona es un adulto")
}else if (edad>=60){
console.log("La persona es un adulto mayor")
}