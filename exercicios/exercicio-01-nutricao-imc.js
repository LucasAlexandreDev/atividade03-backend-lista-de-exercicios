/*************************************************************************** 

* Objetivo: Arquivo responsável pela entrada de dados do exercício de Nutrição IMC
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
const tipoErro  = require('../modulo/mensagemErro/imc-erros.js')
const calculo   = require('../modulo/calculos/calculo-imc.js')
const regras    = require('../modulo/regraDeNegocio/imc-regras.js')

// função principal do programa
const iniciarPrograma = function(){
    
    // entrada de dados do usuário
    entradaDeDados.question('Digite o nome do(a) Paciente: ', function(nome){
        let nomePaciente = nome

        entradaDeDados.question('Digite o peso em (kg): ', function(peso){
            let pesoPaciente = peso

            entradaDeDados.question('Digite a altura em (m): ', function(altura){
                let alturaPaciente = altura

                // condição responsável por validar os erros de entrada do usuário
                if(!validacao.validarVazio(nomePaciente) && !validacao.validarVazio(pesoPaciente) && !validacao.validarVazio(alturaPaciente)){
                    console.log(tipoErro.erros('camposObrigatorios'))
                    return iniciarProgramaNovamente()

                }else if(!validacao.validarVazio(nomePaciente)){
                    console.log(tipoErro.erros('nomeObrigatorio'))
                    return iniciarProgramaNovamente()

                }else if(!validacao.validarVazio(peso)){
                    console.log(tipoErro.erros('pesoObrigatorio'))
                    return iniciarProgramaNovamente()

                }else if(!validacao.validarVazio(altura)){
                    console.log(tipoErro.erros('alturaObrigatoria'))
                    return iniciarProgramaNovamente()

                }else if(!validacao.validarNumero(peso)){
                    console.log(tipoErro.erros('pesoInvalido'))
                    return iniciarProgramaNovamente()

                }else if(!validacao.validarNumero(altura)){
                    console.log(tipoErro.erros('alturaInvalida'))
                    return iniciarProgramaNovamente()

                }else if(!validacao.validarNumeroPositivo(peso)){
                    console.log(tipoErro.erros('pesoZeroOuNegativo'))
                    return iniciarProgramaNovamente()

                }else if(!validacao.validarNumeroPositivo(altura)){
                    console.log(tipoErro.erros('alturaZeroOuNegativa'))
                    return iniciarProgramaNovamente()
                }

                 // conversão de dados 
                const pesoFinal   = validacao.converterNumeroComVirgula(pesoPaciente)
                const alturaFinal = validacao.converterNumeroComVirgula(alturaPaciente)

                // execução dos cálculos e regras de negócios 
                const resultadoImc       = calculo.calcularImc(pesoFinal, alturaFinal)
                const classificarPesoImc = regras.classificarImc(resultadoImc)
                const diagnostico        = regras.definirDiagnosticoPaciente(classificarPesoImc)
                
                // exibição da saída de dados e relatório
                console.log()
                console.log(`
==================================================
        RELATÓRIO DE AVALIAÇÃO NUTRICIONAL
==================================================

Paciente.............: ${nomePaciente}
Peso informado.......: ${pesoPaciente} kg
Altura informada.....: ${alturaPaciente} m
IMC Calculado........: ${resultadoImc}
Classificação........: ${classificarPesoImc}

==================================================
                   DIAGNÓSTICO
==================================================

${diagnostico}

==================================================
`)
                
                // chama a função para o sistema reinicar novamente 
                iniciarProgramaNovamente()
            })
        })
    })
}

// função responsável por perguntar ao usuário se deseja realizar um novo cálculo
const iniciarProgramaNovamente = function() {
    
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