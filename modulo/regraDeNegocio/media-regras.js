 /*************************************************************************** 

* Objetivo: Arquivo responsável pelas regras de classificação da Media Escolar
* Dev: Lucas Alexandre da Silva
* Data: 01/03/26
* Versão: 1.0

****************************************************************************/

const analisarStatusDoAluno = function(mediaDoAluno){
    let resultadoStatus

    if(mediaDoAluno > 70){
        return resultadoStatus = 'aprovado'

    }else if(mediaDoAluno < 50){
        return resultadoStatus = 'reprovado'

    }else if(mediaDoAluno >= 50 && mediaDoAluno <= 69){
        return resultadoStatus = 'de exame'

    }else{
        return false
    }
}

const analisarStatusDoAlunoDeExame = function(mediaExame){
    let resultadoStatusExame

    if(mediaExame >= 60){
        return resultadoStatusExame = 'aprovado'
    
    }else{
        return resultadoStatusExame = 'reprovado'
    }
}


const definirGeneroAluno = function(sexoAluno){
    let generoAluno

    if(sexoAluno == 'masculino'){
        generoAluno = 'O aluno'

    }else if(sexoAluno == 'feminino'){
        generoAluno = 'A aluna'

    }else{
        return false
    }

    return generoAluno
}   

const definirGeneroProfessor = function(sexoProfessor){
    let generoProfessor

    if(sexoProfessor == 'masculino'){
        generoProfessor = 'professor'

    }else if(sexoProfessor == 'feminino'){
        generoProfessor = 'professora'

    }else{
        return false
    }

    return generoProfessor
}

const exibirResultadoFormulario = function(generoAluno, nomeUsuario, nota1, nota2, nota3, nota4, valorStatus, disciplina, curso, generoProfessor, nomeProfessor, media){
    let relatorioAluno
       
    relatorioAluno = `

===================================================
        RELATÓRIO DE DESEMPENHO ACADÊMICO
===================================================

${generoAluno} ${nomeUsuario} foi ${valorStatus} na disciplina ${disciplina}.

Curso................: ${curso}
${generoProfessor}.............: ${nomeProfessor}

==================================================
                    NOTAS
==================================================

Notas do aluno.......: ${nota1}, ${nota2}, ${nota3}, ${nota4}
Média Final..........: ${media}

==================================================`

    return relatorioAluno
}

const exibirResultadoFormularioExame = function(generoAluno, nomeUsuario, nota1, nota2, nota3, nota4, notaExame, valorStatus, disciplina, curso, generoProfessor, nomeProfessor, media, mediaFinalExame){
        
    let relatorioAluno = `

==================================================
        RELATÓRIO DE DESEMPENHO ACADÊMICO
==================================================

${generoAluno} ${nomeUsuario} ficou ${valorStatus} na disciplina ${disciplina}.

Curso................: ${curso}
${generoProfessor}.............: ${nomeProfessor}

==================================================
                     NOTAS
==================================================

Notas do aluno.......: ${nota1}, ${nota2}, ${nota3}, ${nota4}
Média Parcial........: ${media}
Nota do Exame........: ${notaExame}
Média Final Exame....: ${mediaFinalExame}

==================================================`
    
    return relatorioAluno
}

module.exports ={
    analisarStatusDoAluno,
    definirGeneroAluno,
    definirGeneroProfessor,
    exibirResultadoFormulario,
    analisarStatusDoAlunoDeExame,
    exibirResultadoFormularioExame,
}