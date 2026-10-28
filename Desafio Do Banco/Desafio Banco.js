const botao = document.getElementById("executar");
const operacao = document.getElementById("operacao");
const campoValor = document.getElementById("valor");
const saldoTela = document.getElementById("saldo");
const resultado = document.getElementById("resultado");

let saldo = 1000;
let historico = [];
historico.push("Abertura da conta: R$ 1.000,00");

function dinheiro(n) {
  return "R$ " + n.toLocaleString("pt-BR") + ",00";
}

saldoTela.textContent = dinheiro(saldo);

botao.addEventListener("click", function () {

  let escolha = operacao.value;
  let valor = Number(campoValor.value);

  switch (escolha) {

    case "consultar":
      resultado.textContent = "Saldo disponível: " + dinheiro(saldo);
      break;

    case "depositar":
      if (campoValor.value === "" || !Number.isInteger(valor) || valor <= 0) {
        resultado.textContent = "Erro: digite um número inteiro maior que zero.";
      } else {
        saldo = saldo + valor;
        historico.push("Depósito: +" + dinheiro(valor));
        resultado.textContent = "Depósito de " + dinheiro(valor) + " realizado com sucesso!\nNovo saldo: " + dinheiro(saldo);
      }
      break;

    case "sacar":
      if (campoValor.value === "" || !Number.isInteger(valor) || valor <= 0) {
        resultado.textContent = "Erro: digite um número inteiro maior que zero.";
      } else if (valor % 10 !== 0) {
        resultado.textContent = "Erro: o valor do saque deve ser múltiplo de 10.";
      } else if (valor > saldo) {
        resultado.textContent = "Erro: saldo insuficiente.";
      } else {
        saldo = saldo - valor;
        historico.push("Saque: -" + dinheiro(valor));

        let restante = valor;
        let n100 = 0;
        let n50 = 0;
        let n20 = 0;
        let n10 = 0;

        while (restante >= 100) {
          restante = restante - 100;
          n100++;
        }
        while (restante >= 50) {
          restante = restante - 50;
          n50++;
        }
        while (restante >= 20) {
          restante = restante - 20;
          n20++;
        }
        while (restante >= 10) {
          restante = restante - 10;
          n10++;
        }

        let texto = "Saque de " + dinheiro(valor) + " realizado com sucesso!\n";
        texto = texto + "Notas entregues:\n";
        texto = texto + n100 + " nota(s) de R$ 100\n";
        texto = texto + n50 + " nota(s) de R$ 50\n";
          texto = texto + n20 + " nota(s) de R$ 20\n";
        texto = texto + n10 + " nota(s) de R$ 10\n";
        texto = texto + "Total de notas: " + (n100 + n50 + n20 + n10) + "\n";
        texto = texto + "Saldo restante: " + dinheiro(saldo);
        resultado.textContent = texto;
      }
      break;

    case "extrato":
      let extrato = "EXTRATO\n";
      for (let i = 0; i < historico.length; i++) {
        extrato = extrato + (i + 1) + ". " + historico[i] + "\n";
      }
      extrato = extrato + "\nSaldo atual: " + dinheiro(saldo);
      resultado.textContent = extrato;
      break;
  }

  saldoTela.textContent = dinheiro(saldo);
});