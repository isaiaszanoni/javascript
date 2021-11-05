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

document.querySelector(".info-nome").addEventListener("click", mostraMensagem);

/* ! Função anônima ! */
document.querySelector("h1").addEventListener("click", function(){
    console.log((document.querySelector("h1").textContent) + " por função anônima!")
});

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr);


});

