document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos.");
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert("Por favor, insira um e-mail válido.");
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});
