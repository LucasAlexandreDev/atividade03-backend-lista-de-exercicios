const erros = function(tipoErro){
    
    const mensagens = {
 
    // campos obrigatórios
    camposObrigatorios: 'Preencha todos os campos obrigatórios.',

    // números inválidos
    numeroInvalido: 'Digite um número válido.',
    numeroInteiroInvalido: 'O número deve ser inteiro.',

    // intervalo permitido
    numeroInicialIntervalo: 'O número inicial deve estar entre 0 e 500.',
    numeroFinalIntervalo: 'O número final deve estar entre 100 e 1000.',

    // sequência inválida
    sequenciaInvalida: 'O número inicial deve ser menor que o final.',

    // opção inválida
    opcaoInvalida: 'Opção inválida. Tente novamente.',

    // opção inválida - reinicar o sistema
    iniciarNovamenteInvalida: 'Opção inválida. Digite "s" para sim ou "n" para não'
    
}

    return mensagens[tipoErro]
}

module.exports ={
    erros
}