/*************************************************************************** 

* Objetivo: Arquivo responsável por controlar o fluxo da aplicação, coordenando entrada de dados, validações e cálculos.
* Dev: Lucas Alexandre da Silva
* Data: 25/02/26
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
const validacao         = require ('./modulo/validacao/validacao-dados.js')
const exercicioImc      = require ('./exercicios/exercicio-01-nutricao-imc.js')
const exercicioMedia    = require ('./exercicios/exercicio-02-media-escolar.js')
const exercicioTabuada  = require ('./exercicios/exercicio-03-tabuada.js')
const exercicioFatorial = require ('./exercicios/exercicio-04-fatorial.js')
const exercicioParImpar = require ('./exercicios/exercicio-05-par-e-impar.js')

// função principal do programa
const iniciarPrograma = function(){

    console.log(`
================ MENU DE EXERCÍCIOS ================

1 - Cálculo de IMC
2 - Média Escolar
3 - Tabuada
4 - Fatorial
5 - Par ou Ímpar
0 - Encerrar Programa

====================================================
`)

    entradaDeDados.question('Escolha um exercício: ', function(opcao){
        let opcaoUsuario = opcao.trim()

        // valida se está vazio
        if(!validacao.validarVazio(opcaoUsuario)){
            console.log('ERRO: É obrigatório escolher uma opção.')
            return iniciarPrograma()

        // valida se é número
        }else if(!validacao.validarNumero(opcaoUsuario)){
            console.log('ERRO: Digite apenas números.')
            return iniciarPrograma()
        }

        switch(opcaoUsuario){

            case '1':
                exercicioImc.iniciarPrograma(entradaDeDados, iniciarSistemaNovamente)
                break

            case '2':
                exercicioMedia.iniciarPrograma(entradaDeDados, iniciarSistemaNovamente)
                break

            case '3':
                exercicioTabuada.iniciarPrograma(entradaDeDados, iniciarSistemaNovamente)
                break

            case '4':
                exercicioFatorial.iniciarPrograma(entradaDeDados, iniciarSistemaNovamente)
                break

            case '5':
                exercicioParImpar.iniciarPrograma(entradaDeDados, iniciarSistemaNovamente)
                break

            case '0':
                console.log('Encerrando o sistema Cálculos SA...')
                entradaDeDados.close()
                break

            default:
                console.log('ERRO: Opção inválida.')
                iniciarPrograma()
        }
    })
}


// função para reiniciar o sistema
const iniciarSistemaNovamente = function(){

    entradaDeDados.question('\nDeseja voltar ao menu principal? (s/n): ', function(resposta){
        let respostaUsuario = resposta

        const resultado = validacao.validarIniciarProgramaNovamente(respostaUsuario)

        if(resultado == true){
            iniciarPrograma()

        }else if(resultado == false){
            console.log('Muito obrigado por utilizar os serviços da Cálculos SA.\n====================================================')
            entradaDeDados.close()

        }else{
            console.log('ERRO: Opção inválida. Tente novamente.')
            iniciarSistemaNovamente()
        }
    })
}

iniciarPrograma()
