var paciente = document.querySelector("#primeiro-paciente");
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;
var pacienteNome = paciente.querySelector(".info-nome").textContent;


console.log(paciente);
console.log(peso);
console.log(pacienteNome);
console.log(altura);

var imc = peso / (altura * altura);

var alturaValida = true;
var pesoValido = true;
var mensagem = ""

if (peso <= 0 || peso >= 250){
    pesoValido = false;
    mensagem += "Peso inválido! ";
    //paciente.querySelector(".info-imc").textContent = "Peso inválido!"
}

if (altura <=0 || altura >= 2.5) {
    alturaValida = false;
    mensagem += "Altura inválida! "
}

if (pesoValido && alturaValida) {
    paciente.querySelector(".info-imc").textContent = imc;
} else {
    paciente.querySelector(".info-imc").textContent = mensagem;
}

/*
paciente.querySelector(".info-imc").textContent = imc

console.log(imc)*/