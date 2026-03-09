/*************************************************************************** 

* Objetivo: Arquivo responsável pela entrada de dados do exercício de Tabuada
* Dev: Lucas Alexandre da Silva
* Data: 04/03/26
* Versão: 1.0

****************************************************************************/

// import dos modulos internos da aplicação
const validacao = require('../modulo/validacao/validacao-dados.js')
const tipoErro  = require('../modulo/mensagemErro/tabuada-erros.js')
const calculo   = require('../modulo/calculos/calculo-tabuada.js')

// função principal do programa
const iniciarPrograma = function(entradaDeDados, iniciarSistemaNovamente){
    
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
                        return iniciarSistemaNovamente()
                    
                    }else if(!validacao.validarVazio(valorTabuadaInicial)){
                        console.log(tipoErro.erros('tabuadaInicialObrigatorio'))
                        return iniciarSistemaNovamente()
                    
                    }else if(!validacao.validarVazio(valorTabuadaFinal)){
                        console.log(tipoErro.erros('tabuadaFinalObrigatorio'))
                        return iniciarSistemaNovamente()
                    
                    }else if(!validacao.validarVazio(contadorInicial)){
                        console.log(tipoErro.erros('contadorIncialObrigatorio'))
                        return iniciarSistemaNovamente()
                    
                    }else if(!validacao.validarVazio(contadorFinal)){
                        console.log(tipoErro.erros('contadorFinalObrigatorio'))
                        return iniciarSistemaNovamente()
                    
                    }else if(!validacao.validarNumeroPositivo(valorTabuadaFinal)){
                        console.log(tipoErro.erros('tabuadaInvalido'))
                        return iniciarSistemaNovamente()

                    }else if(!validacao.validarNumeroPositivo(valorTabuadaFinal)){
                        console.log(tipoErro.erros('tabuadaInvalido'))
                        return iniciarSistemaNovamente()

                    }else if(!validacao.validarNumeroPositivo(contadorInicial)){
                        console.log(tipoErro.erros('contadorInvalido'))
                        return iniciarSistemaNovamente()

                    }else if(!validacao.validarNumeroPositivo(contadorFinal)){
                        console.log(tipoErro.erros('contadorInvalido'))
                        return iniciarSistemaNovamente()

                    }else if(!validacao.validarIntervaloNumerico(tabuadaInicial, 2, 100)){
                        console.log(tipoErro.erros('tabuadaForaDoIntervalo'))
                        return iniciarSistemaNovamente()

                    }else if(!validacao.validarIntervaloNumerico(tabuadaFInal, 2, 100)){
                        console.log(tipoErro.erros('tabuadaForaDoIntervalo'))
                        return iniciarSistemaNovamente()
                    
                    }else if(!validacao.validarIntervaloNumerico(contadorInicial, 1, 50)){
                        console.log(tipoErro.erros('contadorInvalido'))
                        return iniciarSistemaNovamente()
                    
                    }else if(!validacao.validarIntervaloNumerico(contadorFinal, 1, 50)){
                        console.log(tipoErro.erros('contadorInvalido'))
                        return iniciarSistemaNovamente()
                    }

                    // chamando a função de gerar tabuada direto sem atribuir uma variável, por conta da função não possuir return
                    calculo.gerarTabuada(valorTabuadaInicial, valorTabuadaFinal, contadorInicial, contadorFinal)
                    return iniciarSistemaNovamente()
                    
                })
            })
        })
    }) 
}

module.exports ={
    iniciarPrograma
}