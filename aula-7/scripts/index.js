
function executar(evento) {
    evento.preventDefault();

    limparform();

    // Validar nome
    const nome = document.querySelector("#nome").value.trim();
    const erronome = document.querySelector("#erro-nome");

    if (nome === "") {
        erronome.textContent = "O campo não pode estar vazio.";
        erronome.classList.add("erro");
        erronome.classList.remove("oculto");
    }

    // Validar idade
    const idade = document.querySelector("#idade").value;
    const erroidade = document.querySelector("#erro-idade");

    if (idade === "") {
        erroidade.textContent = "Idade não pode estar vazia.";
        erroidade.classList.add("erro");
        erroidade.classList.remove("oculto");
    } else if (Number(idade) < 18) {
        erroidade.textContent = "Necessário ter 18 anos ou mais.";
        erroidade.classList.add("erro");
        erroidade.classList.remove("oculto");
    }

    // Validar e-mail
    const email = document.querySelector("#email").value.trim();
    const erroemail = document.querySelector("#erro-email");
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        erroemail.textContent = "O e-mail não pode estar vazio.";
        erroemail.classList.add("erro");
        erroemail.classList.remove("oculto");
    } else if (!regexEmail.test(email)) {
        erroemail.textContent = "Digite um e-mail válido.";
        erroemail.classList.add("erro");
        erroemail.classList.remove("oculto");
    }
}

function limparform() {
    const erros = document.querySelectorAll(
        "#erro-nome, #erro-idade, #erro-email"
    );

    erros.forEach((item) => {
        item.textContent = "";
        item.classList.remove("erro");
        item.classList.add("oculto");
    });
}
