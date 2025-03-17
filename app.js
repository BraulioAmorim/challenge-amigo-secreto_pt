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

    atualizarLista(); // Atualiza a interface
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    const ul = document.getElementById("listaAmigos"); 
    ul.innerHTML = ""; // Limpa a lista antes de adicionar novos elementos

    for (let i = 0; i < listaDeAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaDeAmigos[i]; // Define o nome do amigo
        ul.appendChild(li); // Adiciona o elemento à lista no HTML
    }
}

