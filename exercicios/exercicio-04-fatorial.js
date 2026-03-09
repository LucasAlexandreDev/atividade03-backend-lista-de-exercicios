/*************************************************************************** 

* Objetivo: Arquivo responsável pela entrada de dados do exercício de fatorial
* Dev: Lucas Alexandre da Silva
* Data: 01/02/26
* Versão: 1.0

****************************************************************************/

// import dos modulos internos da aplicação
const validacao = require('../modulo/validacao/validacao-dados.js')
const tipoErro  = require('../modulo/mensagemErro/fatorial-erros.js')
const calculo   = require('../modulo/calculos/calculo-fatorial.js')

const iniciarPrograma = function(entradaDeDados, iniciarSistemaNovamente){
    // entrada de dados 
    entradaDeDados.question('Digite o número que deseja descobrir o seu fatorial: ', function(numero){
        let numeroFatorial = numero

        // condição responsável por validar os erros de entrada do usuário
        if(!validacao.validarVazio(numeroFatorial)){
            console.log(tipoErro.erros('numeroFatorialObrigatorio'))
            return iniciarSistemaNovamente()

        }else if(!validacao.validarNumero(numeroFatorial)){
            console.log(tipoErro.erros('numeroFatorialInvalido'))
            return iniciarSistemaNovamente()

        }else if(numeroFatorial == 0){
            console.log(tipoErro.erros('numeroZeroInvalido'))
            return iniciarSistemaNovamente()

        }else if(numeroFatorial == 1){
            console.log(tipoErro.erros('numeroUmInvalido'))
            return iniciarSistemaNovamente()
        
        }

        let numeroFatorialConvertido = Number(numeroFatorial)

        if(!validacao.converterNumeroComVirgula(numeroFatorialConvertido)){
            console.log(tipoErro.erros('numeroDecimalInvalido'))
            return iniciarSistemaNovamente()
        }

        let resultadoFatorial = calculo.gerarFatorial(numeroFatorialConvertido)

        console.log(resultadoFatorial)

        return iniciarSistemaNovamente()
    })
}

module.exports ={
    iniciarPrograma
}