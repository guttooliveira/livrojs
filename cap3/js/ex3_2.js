function calcularPeso() {
    //cria referencia aos elementos manipulados pela function
    var inNome = document.getElementById('inNome');
    var rbMasculino = document.getElementById('rbMasculino');
    var rbFeminino = document.getElementById('rbFeminino');
    var inAltura = document.getElementById('inAltura');
    var outResposta = document.getElementById('outResposta');

    //obtém os conteúdos dos campos de edição da página
    var nome = inNome.value;
    var masculino = rbMasculino.checked;
    var feminino = rbFeminino.checked;
    var altura = Number(inAltura.value);

    //verifica se nome foi preenchido e sexo selecionado
    if (nome == "" || (masculino == false && feminino == false)) {
        alert('Por favor, informe o nome e selecione o sexo');
        inNome.focus(); // posiciona (joga o foco) no campo de edição inNome
        return;
    }

    // se altura vazio(0) ou Nan: Not-a-Number (um texto for informado, por exemplo)
    if (altura == 0 || isNaN(altura)){
        alert('Por favor, informe a altura corretamente')
        inAltura.focus();
        return;
    }
    // se masculino (significa se masculino == true)
    if (masculino) {
        var peso = 22 * Math.pow(altura, 2); //Math.pow eleva ao quadrado
    } else {
        var peso = 21 * Math.pow(altura, 2);
    }

    // apresenta a resposta (altera o conteúdo da linha outResposta)
    outResposta.textContent = `${nome}: Seu peso ideal é ${peso.toFixed(3)} Kg`;

}
    // cria referencia ao elemento btCalcular e registra o evento associado a calcularPeso
    var btCalcular = document.getElementById('btCalcular');
    btCalcular.addEventListener('click', calcularPeso);