"use strict"

//var saludo = "Bienvenido";

//console.log(saludo);

//alert("Ésta es una alerta con Javascript, acepta para continuar a la web")

const botones = document.querySelector(".botones");

botones.addEventListener('click', function () {
    console.log("El boton se ha pulsado");
})

botones.addEventListener('mouseover', function () {
    console.log("El mouse esta sobre el botón");
})

botones.addEventListener('mouseout', function () {
    console.log("El mouse esta fuera del botón");
})
