var pacientes = document.querySelectorAll(".paciente")

for (var i = 0; i < pacientes.length; i++) {
    var paciente = i;

    paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var pacienteNome = paciente.querySelector(".info-nome").textContent;


    var imc = peso / (altura * altura);

    var alturaValida = true;
    var pesoValido = true;
    var mensagem = ""

    if (peso <= 0 || peso >= 250) {
        pesoValido = false;
        mensagem += "Peso inválido! ";
        paciente.querySelector(".info-peso").classList.add("paciente-invalido");     //paciente.querySelector(".info-imc").textContent = "Peso inválido!"
    }

    if (altura <= 0 || altura >= 2.5) {
        alturaValida = false;
        mensagem += "Altura inválida! "
        paciente.querySelector(".info-altura").classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
    } else {
        paciente.querySelector(".info-imc").textContent = mensagem
    }
}



function mostraMensagem(){
    console.log("Olha, um click! *_*")
}

// var titulo = document.querySelector("h1");
document.querySelector(".info-nome").addEventListener("click", mostraMensagem);

/* ! Função anônima ! */

document.querySelector("h1").addEventListener("click", function(){
    console.log((document.querySelector("h1").textContent) + " por função anônima!")
});

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Oi! Botão está funcionando!")
});