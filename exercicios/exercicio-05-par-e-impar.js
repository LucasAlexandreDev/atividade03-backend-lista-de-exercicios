/*************************************************************************** 

* Objetivo: Arquivo responsável pela entrada de dados do exercício de Par e Impar
* Dev: Lucas Alexandre da Silva
* Data: 01/02/26
* Versão: 1.0

****************************************************************************/

// import dos modulos internos da aplicação
const validacao = require('../modulo/validacao/validacao-dados.js')
const tipoErro  = require('../modulo/mensagemErro/par-e-impar-erros.js')
const calculo   = require('../modulo/calculos/calculo-par-e-impar.js')

const iniciarPrograma = function(entradaDeDados, iniciarSistemaNovamente){
    
    // entrada de dados
    entradaDeDados.question('Digite o número inicial: ', function(numeroInicial){
        let valorInicial = numeroInicial

        entradaDeDados.question('Digite o número final: ', function(numeroFinal){
            let valorFinal = numeroFinal

            entradaDeDados.question('Escolha uma das opções (1-Pares | 2-Ímpares | 3-Ambos): ', function(opcao){
                let opcaoUsuario = opcao

                // condição responsável por validar os erros de entrada do usuário
                if(!validacao.validarVazio(valorInicial) && !validacao.validarVazio(valorFinal) && !validacao.validarVazio(opcaoUsuario)){
                    console.log(tipoErro.erros('camposObrigatorios'))
                    return iniciarSistemaNovamente()
                
                }else if(!validacao.validarNumero(valorInicial)){
                    console.log(tipoErro.erros('numeroInvalido'))
                    return iniciarSistemaNovamente()
                
                }else if(!validacao.validarNumeroInteiro(valorInicial)){
                    console.log(tipoErro.erros('numeroInteiroInvalido'))
                    return iniciarSistemaNovamente()
                
                }else if(!validacao.validarIntervaloNumerico(valorInicial, 0, 500)){
                    console.log(tipoErro.erros('numeroInicialIntervalo'))
                    return iniciarSistemaNovamente()
                
                }else if(!validacao.validarNumero(valorFinal)){
                    console.log(tipoErro.erros('numeroInvalido'))
                    return iniciarSistemaNovamente()
                
                }else if(!validacao.validarNumeroInteiro(valorFinal)){
                    console.log(tipoErro.erros('numeroInteiroInvalido'))
                    return iniciarSistemaNovamente()
                
                }else if(!validacao.validarIntervaloNumerico(valorFinal, 100, 1000)){
                    console.log(tipoErro.erros('numeroFinalIntervalo'))
                    return iniciarSistemaNovamente()
                
                }else if(!validacao.validarSequenciaInicialFinal(valorInicial, valorFinal)){
                    console.log(tipoErro.erros('sequenciaInvalida'))
                    return iniciarSistemaNovamente()
                
                }else if(!validacao.validarNumeroInteiro(opcaoUsuario)){
                    console.log(tipoErro.erros('opcaoInvalida'))
                    return iniciarSistemaNovamente()
                }

                let resultado = calculo.gerarOpcaoListaDeEscolha(valorInicial, valorFinal, opcaoUsuario)

                if(resultado == false){
                    console.log(tipoErro.erros('opcaoInvalida'))
                    return iniciarSistemaNovamente()
                }

                console.log('\n' + resultado)

                return iniciarSistemaNovamente()
            })
        })
    })
}

module.exports ={
    iniciarPrograma
}