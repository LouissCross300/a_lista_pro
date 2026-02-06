const campoTarefa = document.getElementById('campoTarefa');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefas = document.getElementById('listaTarefas');
const contador = document.getElementById('contador');

// 1. FUNÇÃO DO CONTADOR
function atualizarContador() {
    const total = listaTarefas.querySelectorAll('li').length;
    if (contador) {
        contador.innerText = `Tarefas: ${total}`;
    }
}

// 2. FUNÇÃO PRINCIPAL: ADICIONAR TAREFA
btnAdicionar.addEventListener('click', function() {
    const textoTarefa = campoTarefa.value;

    if (textoTarefa.trim() === "") {
        alert("Escreva sua tarefa!");
        return;
    }

    const novaTarefa = document.createElement('li');
    novaTarefa.innerHTML = `
        <span>${textoTarefa}</span>
        <button class="btnRemover">❌</button>`;

    listaTarefas.appendChild(novaTarefa);
    atualizarContador();

    // Lógica interna da nova tarefa (Remover e Riscar)
    const btnRemover = novaTarefa.querySelector('.btnRemover');
    btnRemover.addEventListener('click', function() {
        novaTarefa.remove();
        atualizarContador();
    });

    const textoTarefaSpan = novaTarefa.querySelector('span');
    textoTarefaSpan.addEventListener('click', function() {
        textoTarefaSpan.classList.toggle('concluida');
    });

    campoTarefa.value = "";
    campoTarefa.focus();
});

// 3. ATALHO: ADICIONAR COM A TECLA ENTER
// Este bloco deve ficar FORA do addEventListener do clique
campoTarefa.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        btnAdicionar.click(); // Isso "chama" a função acima
    }
});

// 4. BOTÃO LIMPAR TUDO
const btnLimparTudo = document.getElementById('btnLimparTudo');
btnLimparTudo.addEventListener('click', function(event) {
    event.preventDefault();
    if (confirm("Deseja apagar todas as tarefas da lista?")) {
        listaTarefas.innerHTML = "";
        atualizarContador();
    }
});

// 5. TROCA DE TEMAS
const btnTema = document.getElementById('btnTema');
const corpoPagina = document.body;
const temas = ['padrao', 'tema-dark', 'tema-natural'];
let temaAtual = 0;

btnTema.addEventListener('click', function(event) {
    event.preventDefault();
    corpoPagina.classList.remove(temas[temaAtual]);
    temaAtual = (temaAtual + 1) % temas.length;
    if (temas[temaAtual] !== 'padrao') {
        corpoPagina.classList.add(temas[temaAtual]);
    }
});