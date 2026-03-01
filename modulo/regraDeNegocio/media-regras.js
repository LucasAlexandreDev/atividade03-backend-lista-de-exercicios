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

module.exports ={
    analisarStatusDoAluno,
    definirGeneroAluno,
    definirGeneroProfessor
}