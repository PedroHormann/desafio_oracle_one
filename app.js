document.addEventListener("DOMContentLoaded", function () {
    const inputNome = document.getElementById("amigo");
    const btnAdicionar = document.querySelector(".button-add");
    const listaNomes = document.getElementById("listaAmigos");
    const btnSortear = document.querySelector(".button-draw");
    const resultado = document.getElementById("resultado");
    
    let nomes = [];

    btnAdicionar.addEventListener("click", function () {
        adicionarAmigo();
    });

    btnSortear.addEventListener("click", function () {
        sortearAmigo();
    });

    function adicionarAmigo() {
        const nome = inputNome.value.trim();
        
        if (nome === "") {
            alert("Por favor, insira um nome válido.");
            return;
        }
        
        nomes.push(nome);
        atualizarLista();
        inputNome.value = "";
    }

    function sortearAmigo() {
        if (nomes.length === 0) {
            alert("Adicione pelo menos um nome antes de sortear.");
            return;
        }
        
        const indiceSorteado = Math.floor(Math.random() * nomes.length);
        resultado.innerHTML = `<li>O amigo secreto é: ${nomes[indiceSorteado]}</li>`;
    }

    function atualizarLista() {
        listaNomes.innerHTML = "";
        nomes.forEach(nome => {
            const li = document.createElement("li");
            li.textContent = nome;
            listaNomes.appendChild(li);
        });
    }
});
