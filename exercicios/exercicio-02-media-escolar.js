/*************************************************************************** 

* Objetivo: Arquivo responsável pela entrada de dados do exercício de Media Escolar
* Dev: Lucas Alexandre da Silva
* Data: 01/02/26
* Versão: 1.0

****************************************************************************/

// import dos modulos internos da aplicação
const validacao = require('../modulo/validacao/validacao-dados.js')
const tipoErro  = require('../modulo/mensagemErro/media-erros.js')
const calculo   = require('../modulo/calculos/calculo-media.js')
const regras    = require('../modulo/regraDeNegocio/media-regras.js')

// função principal do programa
const iniciarPrograma = function(entradaDeDados, iniciarSistemaNovamente){
    
    // entrada de dados do usuário
    entradaDeDados.question('Digite o nome do aluno(a): ', function(nome){
        let nomeAluno = nome
        
        entradaDeDados.question('Digite o nome do professor(a): ', function(nome){
            let nomeProfessor = nome

            entradaDeDados.question('Digite o sexo do aluno(a): ', function(sexoAluno){
                let generoAluno = sexoAluno

                entradaDeDados.question('Digite o sexo do professor(a): ', function(sexoProfessor){
                    let generoProfessor = sexoProfessor

                    entradaDeDados.question('Digite o nome do curso: ', function(curso){
                        let nomeCurso = curso

                        entradaDeDados.question('Digite o nome da disciplina: ', function(disciplina){
                            let nomeDisciplina = disciplina

                            entradaDeDados.question('Digite a nota 1: ', function(valor1){
                                let nota1 = valor1

                                entradaDeDados.question('Digite a nota 2: ', function(valor2){
                                    let nota2 = valor2
                            
                                    entradaDeDados.question('Digite a nota 3: ', function(valor3){
                                        let nota3 = valor3

                                        entradaDeDados.question('Digite a nota 4: ', function(valor4){
                                            let nota4 = valor4

                                            // condição responsável por validar os erros de entrada do usuário
                                            if(!validacao.validarVazio(nomeAluno)      &&    !validacao.validarVazio(nomeProfessor)      && 
                                               !validacao.validarVazio(generoAluno)    &&    !validacao.validarVazio(generoProfessor)    && 
                                               !validacao.validarVazio(nomeCurso)      &&    !validacao.validarVazio(nomeDisciplina)     && 
                                               !validacao.validarVazio(nota1)          &&    !validacao.validarVazio(nota2)              && 
                                               !validacao.validarVazio(nota3)          &&    !validacao.validarVazio(nota4)){
                                                
                                                console.log(tipoErro.erros('camposObrigatorios'))
                                                return iniciarSistemaNovamente()
                                            
                                            }else if(!validacao.validarVazio(nomeAluno)){
                                                console.log(tipoErro.erros('nomeAlunoObrigatorio'))
                                                return iniciarSistemaNovamente()
                                            
                                            }else if(!validacao.validarVazio(nomeProfessor)){
                                                console.log(tipoErro.erros('nomeProfessorObrigatorio'))
                                                return iniciarSistemaNovamente()
                                            
                                            }else if(!validacao.validarVazio(generoAluno)){
                                                console.log(tipoErro.erros('sexoAlunoObrigatorio'))
                                                return iniciarSistemaNovamente()

                                            }else if(!validacao.validarVazio(generoProfessor)){
                                                console.log(tipoErro.erros('sexoProfessorObrigatorio'))
                                                return iniciarSistemaNovamente()
                                            
                                            }else if(!validacao.validarVazio(nomeCurso)){
                                                console.log(tipoErro.erros('cursoObrigatorio'))
                                                return iniciarSistemaNovamente()

                                            }else if(!validacao.validarVazio(nomeDisciplina)){
                                                console.log(tipoErro.erros('disciplinaObrigatoria'))
                                                return iniciarSistemaNovamente()

                                            }else if(!validacao.validarVazio(nota1)){
                                                console.log(tipoErro.erros('notaObrigatoria'))
                                                return iniciarSistemaNovamente()

                                            }else if(!validacao.validarVazio(nota2)){
                                                console.log(tipoErro.erros('notaObrigatoria'))
                                                return iniciarSistemaNovamente()

                                            }else if(!validacao.validarVazio(nota3)){
                                                console.log(tipoErro.erros('notaObrigatoria'))
                                                return iniciarSistemaNovamente()

                                            }else if(!validacao.validarVazio(nota4)){
                                                console.log(tipoErro.erros('notaObrigatoria'))
                                                return iniciarSistemaNovamente()
                                            
                                            }else if(!validacao.validarSexo(generoAluno) || !validacao.validarSexo(generoProfessor)){
                                                console.log(tipoErro.erros('sexoInvalido'))
                                                return iniciarSistemaNovamente()
                                            
                                            }else if(!validacao.validarNumero(nota1)  || !validacao.validarNumero(nota2) || 
                                                     !validacao.validarNumero(nota3)  || !validacao.validarNumero(nota4)){
                                                
                                                console.log(tipoErro.erros('notaInvalida'))
                                                return iniciarSistemaNovamente()
                                            
                                            }else if(!validacao.validarIntervaloNumerico(nota1, 0, 100) || !validacao.validarIntervaloNumerico(nota2, 0, 100) ||
                                                     !validacao.validarIntervaloNumerico(nota3, 0, 100) || !validacao.validarIntervaloNumerico(nota4, 0, 100)){
                                                
                                                console.log(tipoErro.erros('notaForaDoIntervalo'))
                                                return iniciarSistemaNovamente()
                                            }
                                            
                                            // definição de validar se é masculino ou feminino do aluno | professor 
                                            let definirGeneroAluno     = validacao.validarSexo(generoAluno)
                                            let definirGenroProfessor  = validacao.validarSexo(generoProfessor)
                                            
                                            // definição do gênero aluno ou aluna | professor ou professora
                                            let definicaoAluno     = regras.definirGeneroAluno(definirGeneroAluno)
                                            let definicaoProfessor = regras.definirGeneroProfessor(definirGenroProfessor)
                                            
                                            // conversão de dados 
                                            let nota1Convertida = validacao.converterNumeroComVirgula(nota1)
                                            let nota2Convertida = validacao.converterNumeroComVirgula(nota2)
                                            let nota3Convertida = validacao.converterNumeroComVirgula(nota3)
                                            let nota4Convertida = validacao.converterNumeroComVirgula(nota4)

                                            // execução dos cálculos e regras de negócios
                                            let media = calculo.calcularMediaAluno(nota1Convertida, nota2Convertida, nota3Convertida, nota4Convertida)
                                            let statusAluno = regras.analisarStatusDoAluno(media)

                                            // exibição da saída de dados e relatório
                                            let resultadoRelatorio = regras.exibirResultadoFormulario(definicaoAluno, nomeAluno, nota1Convertida, nota2Convertida, nota3Convertida, nota4Convertida, statusAluno, nomeDisciplina, nomeCurso, definicaoProfessor, nomeProfessor, media)
                                            
                                            // condição de exibir aluno aprovado | reprovado ou chamar a função de media exame caso o aluno fique com o status "de exame"
                                            if(statusAluno == 'aprovado' || statusAluno == 'reprovado'){
                                                console.log(resultadoRelatorio)

                                            }else{
                                                iniciarProgramaMediaExame(definicaoAluno, nomeAluno, nota1Convertida, nota2Convertida, nota3Convertida, nota4Convertida, nomeDisciplina, nomeCurso, definicaoProfessor, nomeProfessor, media)
                                            }
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

// funçao responsável por gerenciar a nota e média de exame do aluno
const iniciarProgramaMediaExame = function(definicaoAluno, nomeAluno, nota1Convertida, nota2Convertida, nota3Convertida, nota4Convertida, nomeDisciplina, nomeCurso, definicaoProfessor, nomeProfessor, media){
    
    // entrada de dados
    entradaDeDados.question('Digite a nota que o aluno teve no exame: ', function(valorExame){
        let notaExame = valorExame

        // condição responsável por validar os erros de entrada do usuário
        if(!validacao.validarVazio(notaExame)){
            console.log(tipoErro.erros('notaExameObrigatoria'))
            return iniciarProgramaNovamente()
        
        }else if(!validacao.validarNumero(notaExame)){
            console.log(tipoErro.erros('notaExameInvalida'))
            return iniciarProgramaNovamente()

        }else if(!validacao.validarIntervaloNumerico(notaExame, 0, 100)){
            console.log(tipoErro.erros('notaExameForaDoIntervalo'))
            return iniciarProgramaNovamente()
        }

        // conversão de dados
        let notaExameValida = validacao.converterNumeroComVirgula(notaExame)

        // cálculo e processamento 
        let mediaExame       = calculo.calcularMediaAlunoExame(media, notaExameValida)        
        let statusAlunoExame = regras.analisarStatusDoAlunoDeExame(mediaExame)
        
        // exibição do relátorio do aluno
        let resultadoRelatorio = regras.exibirResultadoFormularioExame(definicaoAluno, nomeAluno, nota1Convertida, nota2Convertida, nota3Convertida, nota4Convertida, notaExameValida, statusAlunoExame, nomeDisciplina, nomeCurso, definicaoProfessor, nomeProfessor, media, mediaExame)

        console.log(resultadoRelatorio)

        return iniciarSistemaNovamente()

    })
} 

module.exports ={
    iniciarPrograma
}