function calcularValor() {

    // referencia os elementos html
    var inValor = document.getElementById('inValor');
    var inTempo = document.getElementById('inTempo');
    var outTotal = document.getElementById('outTotal');

    // obtem o conteudo dos inputs
    var valor = Number(inValor.value);
    var tempo = Number(inTempo.value);

    //Calcula o valor total
    var pagar = Math.ceil(tempo/15) * valor;

    //saida de texto
    outTotal.textContent = "Valor a Pagar R$: " + pagar;
}

//Referencia o botão pagar
var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener('click', calcularValor)