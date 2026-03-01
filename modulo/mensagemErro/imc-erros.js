/****************************************************************************
* Objetivo: Arquivo responsável pelas mensagens de erro do sistema de IMC
* Autor: Lucas Alexandre da Silva
* Data: 01/03/2026
* Versão: 1.0
****************************************************************************/

const erros = function(tipoErro){

    const mensagens = {

        camposObrigatorios: 'Preencha todos os campos obrigatórios.',
        nomeObrigatorio: 'O nome do paciente é obrigatório.',
        pesoObrigatorio: 'O peso é obrigatório.',
        alturaObrigatoria: 'A altura é obrigatória.',
        pesoInvalido: 'Informe um peso válido (ex: 70 ou 70.5).',
        alturaInvalida: 'Informe uma altura válida em metros (ex: 1.75).',
        pesoZeroOuNegativo: 'O peso deve ser maior que zero.',
        alturaZeroOuNegativa: 'A altura deve ser maior que zero.',
        iniciarNovamenteInvalida: 'Opção inválida! Digite "s" para sim ou "n" para não.'
    }

    return mensagens[tipoErro]
}

module.exports ={
    erros
}