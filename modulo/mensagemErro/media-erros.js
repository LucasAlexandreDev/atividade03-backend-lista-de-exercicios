/****************************************************************************
* Objetivo: Arquivo responsável pelas mensagens de erro do sistema de Média Escolar
* Autor: Lucas Alexandre da Silva
* Data: 03/03/2026
* Versão: 1.0
****************************************************************************/

const erros = function(tipoErro){

    const mensagens = {

        // campos obrigatórios
        camposObrigatorios: 'Preencha todos os campos obrigatórios.',
        nomeAlunoObrigatorio: 'O nome do aluno é obrigatório.',
        nomeProfessorObrigatorio: 'O nome do professor é obrigatório.',
        sexoAlunoObrigatorio: 'O sexo do aluno é obrigatório.',
        sexoProfessorObrigatorio: 'O sexo do professor é obrigatório.',
        cursoObrigatorio: 'O nome do curso é obrigatório.',
        disciplinaObrigatoria: 'O nome da disciplina é obrigatório.',

        // sexo inválido
        sexoInvalido: 'Informe "M" para masculino ou "F" para feminino.',

        // 4 notas
        notaObrigatoria: 'Todas as 4 notas devem ser informadas.',
        notaInvalida: 'A nota deve ser um número válido.',
        notaForaDoIntervalo: 'A nota deve estar entre 0 e 100.',

        // nota de exame
        notaExameObrigatoria: 'A nota do exame é obrigatória.',
        notaExameInvalida: 'A nota do exame deve ser um número válido.',
        notaExameForaDoIntervalo: 'A nota do exame deve estar entre 0 e 100.',

        // opção inválida - reinicar o sistema
        opcaoInvalida: 'Opção inválida. Tente novamente.'
    }

    return mensagens[tipoErro]
}

module.exports ={
    erros
}