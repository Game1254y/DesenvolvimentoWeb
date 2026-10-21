
const botao = document.getElementById("gerar");
const lista = document.getElementById("lista");
const campoNumero = document.getElementById("numero");

botao.addEventListener("click", function () {

    const numero = Number(campoNumero.value);

    lista.innerHTML = "";

    for (let i = 1; i <= 10; i++) {

        const item = document.createElement("li");

        item.textContent = `${numero} x ${i} = ${numero * i}`;

        lista.appendChild(item);
    }
});
