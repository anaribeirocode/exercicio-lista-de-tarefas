const inputTarefa = document.getElementById("nova-tarefa");
const btnAdicionar = document.getElementById("adicionar");
const listaTarefas = document.getElementById("lista-tarefas");
const mensagemVazia = document.getElementById("mensagem-vazia");

function atualizarMensagem() {
    if (listaTarefas.children.length === 0) {
        mensagemVazia.style.display = "block";
    } else {
        mensagemVazia.style.display = "none";
    }
}

function removerTarefa(event) {
    const item = event.target.parentElement;
    listaTarefas.removeChild(item);
    atualizarMensagem();
}

function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = textoTarefa;

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.addEventListener("click", removerTarefa);

    li.appendChild(btnRemover);
    listaTarefas.appendChild(li);

    inputTarefa.value = "";
    inputTarefa.focus();

    atualizarMensagem();
}

btnAdicionar.addEventListener("click", adicionarTarefa);
inputTarefa.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});

atualizarMensagem();
