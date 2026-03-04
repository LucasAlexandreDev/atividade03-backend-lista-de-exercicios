/****************************************************************************
* Objetivo: Arquivo responsável pelas mensagens de erro do sistema de Tabuada
* Autor: Lucas Alexandre da Silva
* Data: 03/03/2026
* Versão: 1.0
****************************************************************************/

const erros = function(tipoErro){

    const mensagens = {

        // campos obrigatórios
        camposObrigatorios: 'Preencha todos os campos obrigatórios.',
        tabuadaInicialObrigatorio: 'O valor da tabuada inicial é obrigatório.',
        tabuadaFinalObrigatorio: 'O valor da tabuada final é obrigatório.',
        contadorIncialObrigatorio: 'O valor do contador inicial é obrigatório.',
        contadorFinalObrigatorio: 'O valor do contador final é obrigatório.',

        // número inválido da tabuada
        tabuadaInvalido: 'A tabuada incial deve ser um número válido.',
        
        // número inválido do contador 
        contadorInvalido:'o contador inicial deve ser um número válido.',

        // intervalo númerico tabuada e contador
        tabuadaForaDoIntervalo: 'A tabuada deve estar entre 2 e 100.',
        contadorForaDoIntervalo: 'O contador deve estar entre 1 e 50.',

        // opção inválida - reinicar o sistema
        opcaoInvalida: 'Opção inválida. Tente novamente.'
    }

    return mensagens[tipoErro]
}

module.exports ={
erros
}