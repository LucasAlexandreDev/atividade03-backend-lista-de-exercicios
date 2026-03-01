/*************************************************************************** 

* Objetivo: Arquivo responsável pelas funções de calculo da Tabuada
* Dev: Lucas Alexandre da Silva
* Data: 28/02/26
* Versão: 1.0

****************************************************************************/

const gerarLinhaTabuada = function(numeroInicial, numeroFinal) {
    let multiplicando = Number(numeroInicial)
    let multiplicador = Number(numeroFinal)

    let resultadoLinha = multiplicando * multiplicador

    return `${multiplicando} x ${multiplicador} = ${resultadoLinha}\n`
}

const gerarTabuada = function(valorTabuadaInicial, valorTabuadaFinal, valorInicial, valorFinal) {
    let tabuadaInicial  = Number(valorTabuadaInicial)
    let tabuadaFInal    = Number(valorTabuadaFinal)
    let ContadorFinal   = Number(valorFinal)
    
    let resultadoFinal = ''

    while (tabuadaInicial <= tabuadaFInal) {
        resultadoFinal += `Tabuada do ${tabuadaInicial}\n`
        
        let contadorInicial = Number(valorInicial)

        while (contadorInicial <= ContadorFinal) {
            resultadoFinal += gerarLinhaTabuada(tabuadaInicial, contadorInicial)
            
            contadorInicial++
        }
        
        resultadoFinal  += '\n'
        tabuadaInicial  ++
    }

    return resultadoFinal
}

module.exports ={
    gerarLinhaTabuada,
    gerarTabuada
}