/*************************************************************************** 

* Objetivo: Arquivo responsável pelas funções de calculo da Tabuada
* Dev: Lucas Alexandre da Silva
* Data: 28/02/26
* Versão: 1.0

****************************************************************************/

const gerarTabuada = function(valorTabuadaInicial, valorTabuadaFinal, valorInicial, valorFinal) {
    let tabuadaInicial  = Number(valorTabuadaInicial)
    let tabuadaFInal    = Number(valorTabuadaFinal)
    let contadorFinal   = Number(valorFinal)

    // enquanto a tabuada inicial for menor ou igual à final
    while (tabuadaInicial <= tabuadaFInal) {
        
        // mostre no console qual tabuada está sendo exibida
        console.log(`\nTabuada do ${tabuadaInicial}`)
        
        // defina o número inicial da multiplicação
        let contadorInicial = Number(valorInicial)

        // enquanto o contador for menor ou igual ao valor final
        while (contadorInicial <= contadorFinal){
            
            // calcule  a multiplicação
            let resultadoMultiplicacao = tabuadaInicial * contadorInicial
            
            // mostre o resultado no console
            console.log(`${tabuadaInicial} x ${contadorInicial} = ${resultadoMultiplicacao}`)
            
            // incrementa o contador até chegar no contador final
            contadorInicial++
        }

        // gera a próxima tabuada até chegar na tabuada final
        tabuadaInicial ++
    }
}

module.exports ={
    gerarTabuada
}