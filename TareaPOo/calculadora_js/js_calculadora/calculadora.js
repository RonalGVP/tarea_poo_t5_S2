const Displayvalor1 = document.getElementById("valor1");
const Displayvalor2 = document.getElementById("valor2");
const Boton_numeros = document.querySelectorAll(".numero");
const Boton_operadores = document.querySelectorAll(".operador");
const Boton_rapido = document.querySelectorAll(".operador_rapido");

const display = new Display(Displayvalor1, Displayvalor2);

Boton_numeros.forEach(boton => {
    boton.addEventListener("click", () => display.agregar_num(boton.innerHTML));
});

Boton_operadores.forEach(boton => {
    boton.addEventListener("click", () => display.resolver(boton.value));
});
Boton_rapido.forEach(boton=>{
    boton.addEventListener("click",() =>display.resolver_1(boton.value)) });