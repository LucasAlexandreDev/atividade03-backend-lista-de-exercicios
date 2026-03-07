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
    // entrada de dados 
    entradaDeDados.question('Digite o número que deseja descobrir o seu fatorial: ', function(numero){
        let numeroFatorial = numero

        // condição responsável por validar os erros de entrada do usuário
        if(!validacao.validarVazio(numeroFatorial)){
            console.log(tipoErro.erros('numeroFatorialObrigatorio'))
            return iniciarProgramaNovamente()

        }else if(!validacao.validarNumero(numeroFatorial)){
            console.log(tipoErro.erros('numeroFatorialInvalido'))
            return iniciarProgramaNovamente()

        }else if(numeroFatorial == 0){
            console.log(tipoErro.erros('numeroZeroInvalido'))
            return iniciarProgramaNovamente()

        }else if(numeroFatorial == 1){
            console.log(tipoErro.erros('numeroUmInvalido'))
            return iniciarProgramaNovamente()
        
        }

        let numeroFatorialConvertido = Number(numeroFatorial)

        if(!validacao.converterNumeroComVirgula(numeroFatorialConvertido)){
            console.log(tipoErro.erros('numeroDecimalInvalido'))
            return iniciarProgramaNovamente()
        }

        let resultadoFatorial = calculo.gerarFatorial(numeroFatorialConvertido)

        console.log(resultadoFatorial)

    })
}

// função responsável por perguntar ao usuário se deseja realizar um novo cálculo
const iniciarProgramaNovamente = function(){
    // entrada de dados do usuário se deseja continuar
    entradaDeDados.question('Deseja realizar outro cálculo? (s/n): ', function(resposta){

        let respostaUsuario = resposta  

        const resultado = validacao.validarIniciarProgramaNovamente(respostaUsuario)

        // condição que válida a resposta desejada pelo usuário
        if(resultado == true){
            iniciarPrograma()  
        
        }else if(resultado == false){
            console.log('\nMuito obrigado por utilizar os serviços da Cálculos SA.\n*************************************************')
            entradaDeDados.close()
        
        }else{
            console.log(tipoErro.erros('iniciarNovamenteInvalida'))
            iniciarProgramaNovamente()
        }    
    })
}

iniciarPrograma()