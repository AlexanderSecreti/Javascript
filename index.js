//Convertidor de monedas

let saludo = document.getElementById("saludo");
let sesion = prompt("Ingrese la seccion a la que desea ingresar (dolares, euros o reales)");
if(sesion === "dolares"){
    saludo.innerHTML = "<h3>Bienvenido al conversor de USD a ARG</h3>";
    saludo.className = "verde";
  }else if(sesion === "euros"){
    saludo.innerHTML = "<h3>Bienvenido al conversor de EUR a ARG</h3>";
    saludo.className = "azul";
}else if(sesion === "reales"){
    saludo.innerHTML = "<h3>Bienvenido al conversor de BRL a ARG</h3>";
    saludo.className = "amarillo";
  }else{
    saludo.innerHTML = "<h3>Por favor elija entre dolares, euros o reales</h3>";
    saludo.className = "coral";
  }

function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 282;
    let euro =285;
    let real = 29; 
    if (document.getElementById("uno").checked){
        resultado = valore * dolar;
        alert(`El cambio de ${valore} USD a ARG es ${resultado}`);
    }
    else if (document.getElementById("dos").checked){
        resultado = valore * euro;
        alert(`El cambio de ${valore} EUR a ARG es ${resultado}`);
    }
    else if (document.getElementById("tres").checked){
        resultado = valore * real;
        alert(`El cambio de ${valore} BRL a ARG es ${resultado}`);
    }
    else{
        alert("Por favor seleccione uno")
    }
}

let contenedor = document.getElementById("contenedor");
let parrafo = document.createElement("p");
parrafo.innerHTML = "<h2>Gracias por utilizar nuestros servicios</h2>";
contenedor.append(parrafo);
contenedor.className = "aqua";

let contenedor2 = document.getElementById("contenedor2");
//Prueba para remover
contenedor2.remove();
contenedor2.className = "red";

let probando = document.getElementById("prueba");
let prueba = ["Pagina", "en", "preparacion", "mil", "disculpas"]

prueba.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = item;
    probando.append(li);
  });

let divisas = {id: 0, divisa: "ARS", precio: "1"};
let prueba2 = document.getElementById("prueba2");
let item = document.createElement("div");
item.innerHTML = `
  <h2>Id: ${divisas.id}</h2>
  <p>Divisa: ${divisas.divisa}</p>
  <b>$${divisas.precio}</b>
`;
prueba2.append(item);

let prueba3 = document.getElementById("prueba3");
let divisas2 = [
  { id: 1, nombre: "USD", precio: 282 },
  { id: 2, nombre: "EUR", precio: 285 },
  { id: 3, nombre: "BRL", precio: 29 },
];

divisas2.forEach((divisa) => {
    let item = document.createElement("div");
    item.innerHTML = `
      <h2>Id: ${divisa.id}</h2>
      <p>Divisa: ${divisa.nombre}</p>
      <b>$${divisa.precio}</b>
    `;
    prueba3.append(item);
  });

/*function dolares() {
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

Objetos y Arrays

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

Funciones de suma, resta, multiplicacion y division

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