/*************************************************************************** 

* Objetivo: Arquivo responsável pela entrada de dados do exercício de fatorial
* Dev: Lucas Alexandre da Silva
* Data: 01/02/26
* Versão: 1.0

****************************************************************************/

// import da biblioteca readline 
const readline = require('readline')

// criação do objeto que armazena a entrada de dados
const entradaDeDados = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
})

// import dos modulos internos da aplicação
const validacao = require('../modulo/validacao/validacaoDados.js')
const tipoErro  = require('../modulo/mensagemErro/fatorial-erros.js')
const calculo   = require('../modulo/calculos/calculo-fatorial.js')

const iniciarPrograma = function(){
    entradaDeDados.question('Digite o número que deseja descobrir o seu fatorial: ', function(numero){
        let numeroFatorial = numero

        if(!validacao.validarVazio(numeroFatorial)){
            console.log(tipoErro.erros('campoObrigatorio'))
            return iniciarProgramaNovamente()
        
        }else if(!validacao.numero(numero)){
            console.log(tipoErro.erros('numeroInvalido'))
            return iniciarProgramaNovamente()

        }else if(!validacao.validarNumeroPositivo(numero)){
            console.log(tipoErro.erros('numeroZeroInvalido'))
            return iniciarProgramaNovamente()
            
        }else if(numeroFatorial <= 1){
            console.log(tipoErro.erros('numeroUmInvalido'))
            return iniciarProgramaNovamente()
        }

        let resultadoFatorial = calculo.gerarFatorial(numeroFatorial)

        console.log(resultadoFatorial)

    })
}