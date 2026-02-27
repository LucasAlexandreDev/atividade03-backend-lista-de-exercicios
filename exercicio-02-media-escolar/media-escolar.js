 /*************************************************************************** 

* Objetivo: Arquivo responsável pelas funções de Media Escolar
* Dev: Lucas Alexandre da Silva
* Data: 27/02/26
* Versão: 1.0

****************************************************************************/

// import da biblioteca de validação de dados
const calcular = require('../modulo/calculos/calculo-media')

const analisarStatusDoAluno = function(mediaDoAluno){
    const valorMedia = calcular.calculoDeMediaAluno(mediaDoAluno)

    let resultadoStatus

    if(valorMedia > 70){
        return resultadoStatus = 'Aprovado'

    }else if(valorMedia < 50){
        return resultadoStatus = 'Reprovado'

    }else if(valorMedia >= 50 && valorMedia <= 69){
        return resultadoStatus = 'Aluno está de exame'

    }else{
        return false
    }
}

const exibirResultadoFormulario = function(nomeUsuario,nota1, nota2, nota3, nota4, valorStatus, disciplina, curso, professor, media){
    let resultadoFormulario

    if(valorStatus == 'Aprovado'){
        return resultadoFormulario = console.log(`O aluno ${nomeUsuario} foi ${valorStatus} na disciplina ${disciplina}./n/n  Curso: ${curso} /nProfessor: ${professor} /nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4} /n Média Final: ${media}`)
        
    }else if(valorStatus == 'Reprovado'){

        return resultadoFormulario = console.log(`O aluno ${nomeUsuario} foi ${valorStatus} na disciplina ${disciplina}./n/n  Curso: ${curso} /nProfessor: ${professor} /nNotas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4} /n Média Final: ${media} Teste Inválido`)
    }
}

// nomeUsuario = 'lu'
// nota1 = 1
// nota2 = 1
// nota3 = 1
// nota4 = 1
// valorStatus = 'Aprovado'
// disciplina = 'a'
// curso = 'b'
// professor = 'c'
// media = '100'


// console.log(exibirResultadoFormulario(nomeUsuario,nota1, nota2, nota3, nota4, valorStatus, disciplina, curso, professor, media))
