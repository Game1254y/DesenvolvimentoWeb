const botao = document.getElementById("enviarPedido");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {

    const marmita = document.getElementById("marmita").value;

    switch (marmita) {

        case "Marmita de frango":
            resultado.textContent = "Pedido enviado à cozinha";
            break;

        case "Marmita de Carne":
            resultado.textContent = "Pedido enviado à cozinha";
            break;

        case "Marmita de Tapioca":
            resultado.textContent = "Pedido enviado à cozinha";
            break;

        case "Marmita de Frango Empanado":
            resultado.textContent = "Pedido enviado à cozinha";
            break;

        case "Marmita de Churrasco":
            resultado.textContent = "Pedido enviado à cozinha";
            break;

        default:
            resultado.textContent = "Escolha sua marmita";
            break;
    }
});