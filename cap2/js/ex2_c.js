function calcularPromocao() {

    var inProduto = document.getElementById('inProduto');
    var inPreco = document.getElementById('inPreco');
    var outPromocao = document.getElementById('outPromocao')
    var outPrecoTerceiro = document.getElementById('outPrecoTerceiro')

    // obtem os valores dos inputs
    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    // Calcula os valor da promocao
    var terceiro = preco / 2;
    var total = (preco * 2) + terceiro;

    // altera o texto das mensagem
    outPromocao.textContent = produto + " - Promoção: Leve 3 por R$: " + total.toFixed(2);
    outPrecoTerceiro.textContent = "O 3º produto custa apenas R$: " + terceiro.toFixed(2);
}

// ativa o botão
var btVer = document.getElementById('btVer');
btVer.addEventListener('click', calcularPromocao)
