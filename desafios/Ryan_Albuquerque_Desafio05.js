let valor = 1156;
let reais = [100,50,20,10,5,2,1];
let notacem, notacinquenta, notavinte, notadez, notacinco, notadois, notaum


for (let index = 0; index < reais.length; index++){
    
    let notaAtual = reais[index]
    //console.log(notaAtual)

    if (valor >= notaAtual) {
        let qtdNotas = valor / notaAtual
       
        let resto = valor % notaAtual
        qtdNotas = qtdNotas - resto / notaAtual
        console.log(qtdNotas + " notas de R$ " + notaAtual)

        //console.log(resto)
        valor = resto

    }
}
