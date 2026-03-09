/*************************************************************************** 

* Objetivo: Arquivo responsável pela entrada de dados do exercício de Nutrição IMC
* Dev: Lucas Alexandre da Silva
* Data: 01/02/26
* Versão: 1.0

****************************************************************************/

// import dos modulos internos da aplicação
const validacao = require('../modulo/validacao/validacao-dados.js')
const tipoErro  = require('../modulo/mensagemErro/imc-erros.js')
const calculo   = require('../modulo/calculos/calculo-imc.js')
const regras    = require('../modulo/regraDeNegocio/imc-regras.js')

// função principal do programa
const iniciarPrograma = function(entradaDeDados, iniciarSistemaNovamente){
    
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
                    return iniciarSistemaNovamente()

                }else if(!validacao.validarVazio(nomePaciente)){
                    console.log(tipoErro.erros('nomeObrigatorio'))
                    return iniciarSistemaNovamente()

                }else if(!validacao.validarVazio(peso)){
                    console.log(tipoErro.erros('pesoObrigatorio'))
                    return iniciarSistemaNovamente()

                }else if(!validacao.validarVazio(altura)){
                    console.log(tipoErro.erros('alturaObrigatoria'))
                    return iniciarSistemaNovamente()

                }else if(!validacao.validarNumero(peso)){
                    console.log(tipoErro.erros('pesoInvalido'))
                    return iniciarSistemaNovamente()

                }else if(!validacao.validarNumero(altura)){
                    console.log(tipoErro.erros('alturaInvalida'))
                    return iniciarSistemaNovamente()

                }else if(!validacao.validarNumeroPositivo(peso)){
                    console.log(tipoErro.erros('pesoZeroOuNegativo'))
                    return iniciarSistemaNovamente()

                }else if(!validacao.validarNumeroPositivo(altura)){
                    console.log(tipoErro.erros('alturaZeroOuNegativa'))
                    return iniciarSistemaNovamente()
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
                return iniciarSistemaNovamente()
            })
        })
    })
}

module.exports ={
    iniciarPrograma
}