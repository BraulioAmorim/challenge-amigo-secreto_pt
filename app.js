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

    // Capricho: Validação: Impede a inserção de nomes duplicados
    if (listaDeAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
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

         // Capricho: Botão de remover nome
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.classList.add("remove-button");
        botaoRemover.onclick = () => removerAmigo(i);

        li.appendChild(botaoRemover);
        ul.appendChild(li); // Adiciona o elemento à lista no HTML

    }
}

// Capricho: Função para remover um nome da lista
function removerAmigo(index) {
    listaDeAmigos.splice(index, 1); // Remove o nome do array
    atualizarLista(); // Atualiza a lista na interface
}

// sortear um amigo aleatoriamente
function sortearAmigo() {
    // Valida se há amigos na lista
    if (listaDeAmigos.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }

    // Gera um índice aleatório baseado no tamanho da lista
    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    
    // Obtém o nome correspondente ao índice sorteado
    const amigoSorteado = listaDeAmigos[indiceSorteado];

    // Exibe o resultado na interface
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Amigo Sorteado: <strong>${amigoSorteado}</strong> 🎉</li>`;
}

    