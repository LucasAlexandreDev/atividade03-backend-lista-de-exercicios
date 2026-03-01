/*************************************************************************** 

* Objetivo: Arquivo responsável pela entrada de dados do exercício de Media Escolar
* Dev: Lucas Alexandre da Silva
* Data: 01/02/26
* Versão: 1.0

****************************************************************************/

const exibirResultadoFormulario = function(generoAluno, nomeUsuario, nota1, nota2, nota3, nota4, notaExame, valorStatus, disciplina, curso, generoProfessor, nomeProfessor, media, mediaExame){
    let relatorioAluno

    if(valorStatus == 'aprovado' || valorStatus == 'reprovado'){
        relatorioAluno = `${generoAluno} ${nomeUsuario} foi ${valorStatus} na disciplina ${disciplina}.\nCurso: ${curso}.\n${generoProfessor}: ${nomeProfessor}.\nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}.\nMédia Final: ${media}.\n` 

    }else if(valorStatus == 'de exame'){
        relatorioAluno = `${generoAluno}  ${nomeUsuario} foi ${valorStatus} na disciplina ${disciplina}.\nCurso: ${curso}.\n${generoProfessor}: ${nomeProfessor}.\nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${notaExame}.\nMédia Final: ${media}.\nMédia Final do Exame: ${mediaExame}` 
    
    }else{
        return false
    }

    return relatorioAluno
}

