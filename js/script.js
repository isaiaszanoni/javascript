var paciente = document.querySelector("#primeiro-paciente");
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;
var pacienteNome = paciente.querySelector(".info-nome").textContent;


console.log(paciente);
console.log(peso);
console.log(pacienteNome);
console.log(altura);

var imc = peso / (altura * altura);

paciente.querySelector(".info-imc").textContent = imc

console.log(imc)