/****************************************************************************
* Objetivo: Arquivo responsável pelas mensagens de erro do sistema de Fatorial
* Autor: Lucas Alexandre da Silva
* Data: 05/03/2026
* Versão: 1.0
****************************************************************************/

const erros = function(tipoErro){

    const mensagens = {

        // campo obrigatório
        numeroFatorialObrigatorio: 'O valor para calcular o fatorial é obrigatório.',

        // números inválidos
        numeroFatorialInvalido: 'O valor informado deve ser um número válido.',
        numeroUmInvalido: 'O valor informado deve ser maior que 1.',
        numeroDecimalInvalido: 'O número deve ser inteiro para calcular o fatorial.',
        numeroZeroInvalido: 'Não existe fatorial do número 0.',

        // opção inválida
        opcaoInvalida: 'Opção inválida. Tente novamente.'
    }

    return mensagens[tipoErro]
}

module.exports ={
    erros
}