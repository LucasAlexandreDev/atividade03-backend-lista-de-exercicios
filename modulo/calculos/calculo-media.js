 /*************************************************************************** 

* Objetivo: Arquivo responsável pelas funções de calculo da Média Escolar
* Dev: Lucas Alexandre da Silva
* Data: 27/02/26
* Versão: 1.0

****************************************************************************/

// import da biblioteca de validação de dados
const validacao = require('../validacaoDados.js')

const calculoDeMediaAluno = function(numero1, numero2, numero3, numero4){
    if( !validacao.validarVazio(numero1)                     || !validacao.validarVazio(numero2)                      || !validacao.validarVazio(numero3)                     || !validacao.validarVazio(numero4)  ||
        !validacao.validarNumero(numero1)                    || !validacao.validarNumero(numero2)                     || !validacao.validarNumero(numero3)                    || !validacao.validarNumero(numero4) ||
        !validacao.validarIntervaloNumerico(numero1, 0, 100) || !validacao.validarIntervaloNumerico(numero2, 0, 100)  || !validacao.validarIntervaloNumerico(numero3, 0, 100) || !validacao.validarIntervaloNumerico(numero4, 0, 100)){

        return false
    }

    let nota1 = Number(numero1)
    let nota2 = Number(numero2)
    let nota3 = Number(numero3)
    let nota4 = Number(numero4)

    let resultadoMedia = (nota1 + nota2 + nota3 + nota4) / 4

    return resultadoMedia

}

const calculoDeMediaAlunoExame = function(valorMedia, valorExame){
    if( !validacao.validarVazio(valorMedia)  ||  !validacao.validarVazio(valorExame) ||
        !validacao.validarNumero(valorMedia) ||  !validacao.validarNumero(valorExame)){
        return false
    }

    let resultadoMedia = Number(valorMedia)
    let resultadoExame = Number(valorExame)

    let resultadoMediaExame = (resultadoMedia + resultadoExame) / 2

    return resultadoMediaExame

}

module.exports ={
    calculoDeMediaAluno,
    calculoDeMediaAlunoExame
}

