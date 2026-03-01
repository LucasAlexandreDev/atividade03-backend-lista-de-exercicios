/*************************************************************************** 

* Objetivo: Arquivo responsável pelas funções de calculo da Média Escolar
* Dev: Lucas Alexandre da Silva
* Data: 27/02/26
* Versão: 1.0

****************************************************************************/

const calcularMediaAluno = function(numero1, numero2, numero3, numero4){
    let nota1 = Number(numero1)
    let nota2 = Number(numero2)
    let nota3 = Number(numero3)
    let nota4 = Number(numero4)

    let resultadoMedia = (nota1 + nota2 + nota3 + nota4) / 4

    return resultadoMedia
}

const calcularMediaAlunoExame = function(valorMedia, valorExame){
    let resultadoMedia = Number(valorMedia)
    let resultadoExame = Number(valorExame)

    let resultadoMediaExame = (resultadoMedia + resultadoExame) / 2

    return Number(resultadoMediaExame.toFixed(2))
}

module.exports ={
    calcularMediaAluno,
    calcularMediaAlunoExame
}

