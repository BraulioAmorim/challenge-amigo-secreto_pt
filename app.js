//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let listaDeAmigos = [];

function adicionarAmigo() {
    
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); // Remove espaços extras no início e no fim

    // Validação: Verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return; 
    }

    listaDeAmigos.push(nome);

    input.value = "";
}
