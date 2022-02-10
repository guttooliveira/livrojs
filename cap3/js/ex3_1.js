function mediaAluno() {
    var inNome = document.getElementById('inNome');
    var inNota1 = document.getElementById('inNota1');
    var inNota2 = document.getElementById('inNota2');
    var outMedia = document.getElementById('outMedia');
    var outSituacao = document.getElementById('outSituacao');

    var nome = inNome.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);

    var media = (nota1 + nota2) / 2;

    outMedia.textContent = ` Média das Notas: ${media.toFixed(1)}`

    if (media >=7) {
        outSituacao.textContent = `Parabéns ${nome}! Você foi aprovado(a)`
        outSituacao.style.color = 'blue';
    } else if (media >=4) {
        outSituacao.textContent= `Atenção ${nome}, você está em exame`
        outSituacao.style.color = 'orange';
    } else {
        outSituacao.textContent= `Ops ${nome}, você foi reprovado(a)`
        outSituacao.style.color = 'red';
    }
}
   
    var btResultado = document.getElementById('btResultado')
    btResultado.addEventListener('click', mediaAluno);
    
