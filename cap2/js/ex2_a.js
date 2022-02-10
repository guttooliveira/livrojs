function calcularPromocao() {
    // referência aos elemntos da pagina
    var inMedicamento = document.getElementById('inMedicamento');
    var inPreco = document.getElementById('inPreco');
    var outMedicamento = document.getElementById('outMedicamento');
    var outValor = document.getElementById('outValor');

    // obtem o conteudo dos campos de entrada
    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);

    // calcula o valor do desconto
    var promocao = Math.floor(preco*2);

    // altera o conteudo dos parágrafos de resposta
    outMedicamento.textContent = "Promoção de " + medicamento;
    outValor.textContent = "Leve 2 por R$: " + promocao.toFixed(2);
}

    // cria um referÊncia ao elemento btCalcular
    var btCalcular = document.getElementById('btCalcular');
    btCalcular.addEventListener('click', calcularPromocao);

