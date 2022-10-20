//Funcion para convertir dolares euros y reales a pesos argentinos

function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 282;
    let euro = 285;
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

//Boton cotizador

let varcotizador = document.getElementById("cotizador");
cotizador.onclick = convertir;

// Mostrar nombre por consola

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  console.log("Su nombre es " + inputs[0].value);
  console.log("Y tienes " + inputs[1].value + " años");
  console.log(inputs[0].value + " Gracias por utilizar nuestros servicios");
})

//ID: prueba

let probando = document.getElementById("prueba");
let prueba = ["<h2>Conversor de Monedas Ya"]

//ForEach de prueba

prueba.forEach(item => {
  let li = document.createElement("li");
  li.innerHTML = item;
  probando.append(li);
});

/*
//ForEach ID: 0 (ARS) (version antigua sin destructuring a modo ejemoplo)
let divisas = {id: 0, divisa: "ARS", precio: "1"};
let prueba2 = document.getElementById("prueba2");
let item = document.createElement("div");
item.innerHTML = `
  <h2>Id: ${divisas.id}</h2>
  <p>Divisa: ${divisas.divisa}</p>
  <b>$${divisas.precio}</b>
`;
prueba2.append(item);
*/

//ForEach ID: 0 (ARS) (version nueva con destructuring)
let divisas = {id: 0, divisa: "ARS", precio: "1"};
let prueba2 = document.getElementById("prueba2");
let item = document.createElement("div");
item.innerHTML = `<h2>${divisas.divisa}</h2><p>${divisas.precio}</p>`;
prueba2.append(item);

//ID: 1, 2 y 3

let prueba3 = document.getElementById("prueba3");
let divisas2 = [
  { id: 1, nombre: "USD", precio: 282 },
  { id: 2, nombre: "EUR", precio: 285 },
  { id: 3, nombre: "BRL", precio: 29 },
];

/*
//ForEach ID: 1(USD), 2(EUR) y 3(BRL) (version antigua sin destructuring)
divisas2.forEach((divisa) => {
    let item = document.createElement("div");
    item.innerHTML = `
      <h2>Id: ${divisa.id}</h2>
      <p>Divisa: ${divisa.nombre}</p>
      <b>$${divisa.precio}</b>
    `;
    prueba3.append(item);
  });
  */

//ForEach ID: 1(USD), 2(EUR) y 3(BRL) (version nueva con destructuring)
divisas2.forEach((divisa) => {
  let item = document.createElement("div");
  item.innerHTML = `<h2>${divisa.nombre}</h2><p>${divisa.precio}</p>`;
  prueba3.append(item);
});

//Se guarda incluso si reiniciamos la pc (datos comunes)
localStorage.setItem("username", "admin");
localStorage.setItem("prueba", "prueba");

//No se guarda si reiniciamos la pc, solo si refrescamos la pagina (datos sensibles)
sessionStorage.setItem("contraseña", "1234");
sessionStorage.setItem("valor", "true");
sessionStorage.setItem("prueba", "prueba");

localStorage.removeItem("prueba");
sessionStorage.removeItem("prueba");

//Se le pide un nombre de usuario
let usuario;
let usuarioStorage = localStorage.getItem("usuario");
if(usuarioStorage){
  usuario = usuarioStorage;
  let mensaje = `Bienvenido ${usuario}`;
  //alert(mensaje);
  swal({
    content: {
      element: "input",
      attributes: {
        placeholder: (mensaje),
        type: "text",
      },
    },
  });
  swal({
    text: (mensaje),
  });
}else{
  swal({
    content: {
      element: "input",
      attributes: {
        placeholder: "Ingrese su nombre de usuario",
        type: "text",
      },
    },
  }).then((value) => {
    localStorage.setItem("usuario", value);
    location.reload();
    usuario = value;
    let mensaje = `Bienvenido ${usuario}`;
    swal({
      text: (mensaje),
    });
  });
}

let saludo = document.getElementById("botondeslogueo");
saludo.innerHTML = "Cerrar sesion";
saludo.className = "rojo";

//Cargar el storage
const nombre = [
    { id: 1, nombre: `${usuario}` },
  ];
  localStorage.setItem("deslogueo", JSON.stringify(nombre));
  
//traemos los elementos del dom
let varbienvenida = document.getElementById("bienvenida");
let botondeslogueo = document.getElementById("botondeslogueo");
  
//declaramos el deslogueo y traemosdel storage
let deslogueo = [];
let deslogueoStorage = JSON.parse(localStorage.getItem("deslogueo"));
  
//validamos si en el storage existe el deslogueo
if(deslogueoStorage){
  deslogueo = deslogueoStorage;
}
  
//recorremos el deslogueo para renderizarlo en el contenedor
deslogueo.forEach(item => {
  let div = document.createElement("div");
  div.innerHTML = `
    <p>Bienvenido: ${item.nombre}</p>
  `;
  varbienvenida.append(div);
});
  
//lógica para el borrado del deslogueo y del contenedor
botondeslogueo.addEventListener("click", () => {
  varbienvenida.innerHTML = "Sesion Cerrada";
  varbienvenida.className = "cerrada";
  swal("Lo esperamos nuevamente!", "Sesion Cerrada", "success");
  localStorage.clear();
})

//botonlogueo para volver a Iniciar Sesion

let botonlogueo = document.getElementById("botonlogueo");
//escribir tu nombre con swal y que te salude
botonlogueo.addEventListener("click", () => {
  swal({
    content: {
      element: "input",
      attributes: {
        placeholder: "Escribe tu nombre",
        type: "text",
      },
    },
  }).then((value) => {
    swal(`Hola ${value}!`);

//Cargar el storage y mostrar con innerhtml
const nombre = [
  {nombre: `${value}` },
];
localStorage.setItem("deslogueo", JSON.stringify(nombre));

let saludo = document.getElementById("bienvenida");
saludo.innerHTML = `Bienvenido ${value}`;
});
});

//Arrays
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

 
//si el ejemplo1 no es falsy retorna ejemplo1 en caso contrario retorna en ejemplo2
const ejemplo1 = 0;
const ejemplo2 = 1;
const resultado = 
ejemplo1 || ejemplo2;

console.log( 0 || "Falsy")  //falsy
console.log( 100 || "Falsy")  //100
console.log( null || "Falsy")  //falsy
console.log( undefined || "Falsy")  //falsy
console.log( "Hola divisas" || "Falsy")  //hola divisas
console.log( "" || "Falsy")  //falsy
console.log( NaN || "Falsy")  //falsy
console.log( true || "Falsy")  //true
console.log( false || "Falsy") // falsy

//Desetructuracion ejemplo divisa1
const divisa = {
  nombre2: "usd",
  valor: 282,
};

/* Metodo obsoleto
let nombre = divisa.nombre;
let valor = divisa.valor; */

//Metodo nuevo
let {
  nombre2,
  valor,
} = divisa;
console.log(nombre2, valor);

//Desetructuracion ejemplo divisa2
const divisa2 = {
  nombre: "eur",
  valor: 285,
  pais: {
    italia: 1,
    españa: 2,
    francia: 3,
    alemania: 4,
  },
};

let {
  nombre3,
  pais: { italia },
} = divisa2;
console.log(italia);

//Modificacion de un objeto (divisa usd a eur)
let objeto = {divisa: "usd", valor: 282};
let objeto1 = objeto;
objeto1.divisa = "eur";
console.log(objeto);

//Horario actual
const DateTime = luxon.DateTime;
const now = DateTime.now();
document.getElementById("horarios").innerHTML = now.toLocaleString(DateTime.DATETIME_SHORT);

//Zona horaria Brasil
const DateTimeBrl = luxon.DateTime;
const nowBrl = DateTimeBrl.now();
const brasil = nowBrl.setZone("America/Sao_Paulo");
console.log(brasil.toLocaleString(DateTime.DATETIME_SHORT));

//Zona horaria España

const DateTimeEsp = luxon.DateTime;
const nowEsp = DateTimeEsp.now();
const españa = nowEsp.setZone("Europe/Madrid");
console.log(españa.toLocaleString(DateTime.DATETIME_SHORT));

//prueba console.log con tiempo

setTimeout(() => {
  console.log("PruebaDe5S");
}, 5000);

setTimeout(() => {
  console.log("AhoraDe8s");
}, 8000);

//7x7 (console.log) 49

function multiply (x, y) {    
  return x * y;
}
function printSquare (x) {    
  let s = multiply(x, x);    
  console.log(s);
}
printSquare(7);

//Contador hasta 5 con setInterval

let counter = 0;
const interval = setInterval(() => {
  counter++;
  console.log("Counter: ", counter);
  if (counter >= 10) {
    clearInterval(interval);
    console.log("Se removió el intervalo");
  }
}, 1000);

//Promesas con valor true
const futuro = (value) => {
  return new Promise((resolve, reject) => {
    value ? resolve("Promesa exitosa") : reject("Promesa fallida");
  });
};

//Capturar el valor de la promesa
futuro(true)
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log("finalizamos proceso"));

//Fetch de prueba con decimales
fetch("https://api.exchangerate.host/latest?base=USD")
.then((response) => response.json())
.then((data) => {
  console.log(data);
  console.log(data.rates);
  console.log(data.rates.ARS);
});


//Let dolar con valor de la api
let dolar2 = fetch("https://api.exchangerate.host/latest?base=USD")
.then((response) => response.json())
.then((data) => {
    return data.rates.ARS;
})
.then((value) => {
    return parseInt(value);
})
.then((value) => {
    console.log(value);
});

//Let euro con valor de la api
let euro2 = fetch("https://api.exchangerate.host/latest?base=EUR")
.then((response) => response.json())
.then((data) => {
    return data.rates.ARS;
})
.then((value) => {
    return parseInt(value);
})
.then((value) => {
    console.log(value);
});

//Let real con valor de la api
let real2 = fetch("https://api.exchangerate.host/latest?base=BRL")
.then((response) => response.json())
.then((data) => {
    return data.rates.ARS;
})
.then((value) => {
    return parseInt(value);
})
.then((value) => {
    console.log(value);
});

/* //Zona horaria Francia

const DateTimeFra = luxon.DateTime;
const nowFra = DateTimeFra.now();
const francia = nowFra.setZone("Europe/Paris");
console.log(francia.toLocaleString(DateTime.DATETIME_SHORT));

//Zona horaria Italia

const DateTimeIta = luxon.DateTime;
const nowIta = DateTimeIta.now();
const italia2 = nowIta.setZone("Europe/Rome");
console.log(italia2.toLocaleString(DateTime.DATETIME_SHORT)); */

/* let contenedor = document.getElementById("contenedor");
let parrafo = document.createElement("p");
parrafo.innerHTML = "<h2>Prueba removida, gracias por utilizar nuestros servicios</h2>";
contenedor.append(parrafo);
contenedor.className = "mexcla";

//Convertidor de monedas


let saludo = document.getElementById("saludo");
let sesion = prompt("Ingrese la seccion a la que desea ingresar (dolares, euros o reales)");
if(sesion === "dolares"){
    saludo.innerHTML = "<h3>Bienvenido al conversor de USD a ARG</h3>";
    saludo.className = "mexcla";
  }else if(sesion === "euros"){
    saludo.innerHTML = "<h3>Bienvenido al conversor de EUR a ARG</h3>";
    saludo.className = "mexcla";
}else if(sesion === "reales"){
    saludo.innerHTML = "<h3>Bienvenido al conversor de BRL a ARG</h3>";
    saludo.className = "mexcla";
  }else{
    saludo.innerHTML = "<h3>Bienvenidos al Conversor de Monedas</h3>";
    saludo.className = "";
}

Posibles opciones para el boton

cotizador.addEventListener("mousedown", () => console.log("mousedown"));
cotizador.addEventListener("mouseup", () => console.log("mouseup"));
cotizador.addEventListener("mouseover", () => console.log("mouseover"));
cotizador.addEventListener("click", () => console.log("click"));
cotizador.addEventListener("mouseout", () => console.log("mouseout"));
cotizador.addEventListener("mousemove", () => console.log("mousemove"));

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