/*************************************************************************** 

* Objetivo: Arquivo responsável pela entrada de dados do exercício de Tabuada
* Dev: Lucas Alexandre da Silva
* Data: 04/03/26
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
const tipoErro  = require('../modulo/mensagemErro/tabuada-erros.js')
const calculo   = require('../modulo/calculos/calculo-tabuada.js')

// função principal do programa
const iniciarPrograma = function(){
    
    // entrada de dados
    entradaDeDados.question('Digite a tabuada inicial: ', function(tabuadaInicial){
        let valorTabuadaInicial = tabuadaInicial

        entradaDeDados.question('Digite a tabuada final: ', function(tabuadaFInal){
            let valorTabuadaFinal = tabuadaFInal

            entradaDeDados.question('Digite o contador inicial: ', function(valorInicial){
                let contadorInicial = valorInicial

                entradaDeDados.question('Digite o contador final: ', function(valorFinal){
                    let contadorFinal = valorFinal

                    // condição responsável por validar os erros de entrada do usuário
                    if(!validacao.validarVazio(valorTabuadaInicial)  && !validacao.validarVazio(valorTabuadaFinal) && 
                       !validacao.validarVazio(contadorInicial)      && !validacao.validarVazio(contadorFinal)){

                        console.log(tipoErro.erros('camposObrigatorios'))
                        return iniciarProgramaNovamente()
                    
                    }else if(!validacao.validarVazio(valorTabuadaInicial)){
                        console.log(tipoErro.erros('tabuadaInicialObrigatorio'))
                        return iniciarProgramaNovamente()
                    
                    }else if(!validacao.validarVazio(valorTabuadaFinal)){
                        console.log(tipoErro.erros('tabuadaFinalObrigatorio'))
                        return iniciarProgramaNovamente()
                    
                    }else if(!validacao.validarVazio(contadorInicial)){
                        console.log(tipoErro.erros('contadorIncialObrigatorio'))
                        return iniciarProgramaNovamente()
                    
                    }else if(!validacao.validarVazio(contadorFinal)){
                        console.log(tipoErro.erros('contadorFinalObrigatorio'))
                        return iniciarProgramaNovamente()
                    
                    }else if(!validacao.validarNumeroPositivo(valorTabuadaFinal)){
                        console.log(tipoErro.erros('tabuadaInvalido'))
                        return iniciarProgramaNovamente()

                    }else if(!validacao.validarNumeroPositivo(valorTabuadaFinal)){
                        console.log(tipoErro.erros('tabuadaInvalido'))
                        return iniciarProgramaNovamente()

                    }else if(!validacao.validarNumeroPositivo(contadorInicial)){
                        console.log(tipoErro.erros('contadorInvalido'))
                        return iniciarProgramaNovamente()

                    }else if(!validacao.validarNumeroPositivo(contadorFinal)){
                        console.log(tipoErro.erros('contadorInvalido'))
                        return iniciarProgramaNovamente()

                    }else if(!validacao.validarIntervaloNumerico(tabuadaInicial, 2, 100)){
                        console.log(tipoErro.erros('tabuadaForaDoIntervalo'))
                        return iniciarProgramaNovamente()

                    }else if(!validacao.validarIntervaloNumerico(tabuadaFInal, 2, 100)){
                        console.log(tipoErro.erros('tabuadaForaDoIntervalo'))
                        return iniciarProgramaNovamente()
                    
                    }else if(!validacao.validarIntervaloNumerico(contadorInicial, 1, 50)){
                        console.log(tipoErro.erros('contadorInvalido'))
                        return iniciarProgramaNovamente()
                    
                    }else if(!validacao.validarIntervaloNumerico(contadorFinal, 1, 50)){
                        console.log(tipoErro.erros('contadorInvalido'))
                        return iniciarProgramaNovamente()
                    }

                    // chamando a função de gerar tabuada direto sem atribuir uma variável, por conta da função não possuir return
                    calculo.gerarTabuada(valorTabuadaInicial, valorTabuadaFinal, contadorInicial, contadorFinal)
                    return iniciarProgramaNovamente()
                    
                })
            })
        })
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