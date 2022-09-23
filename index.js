//Convertidor de monedas

function dolares() {
    let monto = prompt("Ingresa el monto de USD a cambiar por ARS")
    let multiplicacion = 282;
    let resultado = monto * multiplicacion
    alert(resultado);

}

function euros() {
    let monto = prompt("Ingresa el monto de EUR a cambiar por ARS")
    let multiplicacion = 285;
    let resultado = monto * multiplicacion
    alert(resultado);

}

function real() {
    let monto = prompt("Ingresa el monto de BRL a cambiar por ARS")
    let multiplicacion = 29;
    let resultado = monto * multiplicacion
    alert(resultado);

}

function cotizacion (){
    let ingresarNombre = prompt("Por favor ingrese su nombre o ESC para salir");
    while(ingresarNombre != "ESC"){
    alert (`Hola ${ingresarNombre} bienvenido al Convertidor de Monedas`);

    let entrada = prompt("Eleja moneda entre USD, EUR o BRL");
switch (entrada){
    case "USD":
    alert ("Bienvenido al conversor de USD a ARS");
    dolares ()
    break;
    
    case "EUR":
    alert ("Bienvenido al conversor de EUR a ARS");
    euros ()
    break;

    case "BRL":
        alert ("Bienvenido al conversor de BRL a ARS");
        real ()
        break;

    default:
        alert ("Por favor seleccione entre USD, EUR o BRL para continuar, gracias");
        break;    
    }
}
}

//Objetos y Arrays

function Simbolo(valor, letras, pais){
    this.precio = valor;
    this.abreviatura = letras;
    this.nacionalidad = pais;
  }
  const simbolo1 = new Simbolo(8, "MXN", "Mexico");
  const simbolo2 = new Simbolo(1, "JPY", "Japon");
  console.log(simbolo1.precio);
  console.log(simbolo2.nacionalidad);

const pruebaArray = ["usd", "eur", "brl"];
pruebaArray.push("finaldelArray");
pruebaArray.unshift("principioDelArray");
console.log (pruebaArray);
console.log (pruebaArray.indexOf("eur"));
//eur queda en posicion 2 dado al .unshift principioDelArray que toma la posicion 0
console.log (pruebaArray.includes("noexiste")); //false
console.log (pruebaArray.includes("usd")); //true
//includes comprueba si existe, true or false

cotizacion ()

/* Funciones de suma, resta, multiplicacion y division

function suma() {
    let numero1 = parseInt(prompt("Ingrese el primer numero a sumar"));
    let numero2 = parseInt(prompt("Ingrese el segundo numero a sumar"));
    let resultado = parseInt(numero1) + parseInt(numero2);
    alert(resultado);
}

function resta() {
    let numero1 = parseInt(prompt("Ingrese el primer numero a restar"));
    let numero2 = parseInt(prompt("Ingrese el segundo numero a restar"));
    let resultado = parseInt(numero1) - parseInt(numero2);
    alert(resultado);
}

function multiplicacion() {
    let numero1 = parseInt(prompt("Ingrese el primer numero a multiplicar"));
    let numero2 = parseInt(prompt("Ingrese el segundo numero a multiplicar"));
    let resultado = parseInt(numero1) * parseInt(numero2);
    alert(resultado);
}

function division() {
    let numero1 = parseInt(prompt("Ingrese el primer numero a dividir"));
    let numero2 = parseInt(prompt("Ingrese el segundo numero a dividir"));
    let resultado = parseInt(numero1) / parseInt(numero2);
    alert(resultado);
}

*/