const botao = document.getElementById("verificar")

const resultado = document.getElementById("resultado")

botao.addEventListener("click", function () {

    const dia = document.getElementById("dia").value;

    switch (dia) {
        case "1":
            resultado.textContent = "segunda feira";
            break;
    
        case "2":
            resultado.textContent = "terça feira";
            break;
        case "3":
            resultado.textContent = "quarta feira";
            break;
        case "4":
            resultado.textContent = "quinta feira";
            break;
        case "5":
            resultado.textContent = "sexta feira";
            break;

        default:
            resultado.textContent = "selecione um numero";
            break;
    }

 })