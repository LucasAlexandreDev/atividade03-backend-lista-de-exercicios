 /*************************************************************************** 

* Objetivo: Arquivo responsável pelas funções de validação e verificação de dados de entrada da aplicação.
* Dev: Lucas Alexandre da Silva
* Data: 25/02/26
* Versão: 1.0

****************************************************************************/

const validarVazio = function(valor){
    let valorValidado = valor

    if(valorValidado == ''){
        return false

    }else{
        return true
    }
}

const validarNome = function(nome){
    if(!validarVazio(nome)){
        return false
    }

    let nomeValidado = String(nome).trim()

    const regex = /^[\p{L}]+$/u

    if(!regex.test(nomeValidado)){
        return false

    }else{
        return true
    }
}

const validarNumero = function(numero){
    if(!validarVazio(numero)){
        return false
    }

    let numeroConvertido = String(numero).trim().replace(',', '.')

    let numeroValidado = Number(numeroConvertido)
    
    if(isNaN(numeroValidado)){
        return false

    }else{
        return true
    }
}

const converterNumeroComVirgula = function(valor){
    if(!validarNumero(valor)){
        return false
    }

    let numeroConvertido = String(valor).trim().replace(',', '.')
    return Number(numeroConvertido)
}

const validarSexo = function(sexoOpcao){
    if(!validarVazio(sexoOpcao)){
        return false 
    }

    /*
    Normalização Unicode (NFD):

    ->  Separa letra base do diacrítico combinável (acento)
    ->  Permite remover apenas o acento, mantendo a letra


    Exemplos após normalização:
    
    'ê' -> 'e' + U+0302 (circunflexo combinável)
    'ã' -> 'a' + U+0303 (til combinável)
    'ç' -> 'c' + U+0327 (cedilha combinável)


    regex para remover caracteres de acentuação após normalização:

    [ ]              -> define um conjunto de caracteres
    \u0300-\u036f    -> intervalo Unicode dos diacríticos (acentos combinados)
    g                -> aplica a substituição em toda a string (global)
    ""               -> substitui cada ocorrência por nada (remove o acento)

    replace("", ...) -> substitui os caracteres encontrados por string vazia
    */

    let genero = sexoOpcao.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")

    if(genero == 'm'       || genero == 'masculino'|| genero == 'homem'  || genero == 'menino' || genero == 'garoto' || genero == 'macho'){
        return 'masculino'

    }else if(genero == 'f' || genero == 'feminino' || genero == 'mulher' || genero == 'menina' || genero == 'garota' || genero == 'femea'){
        return 'feminino'

    }else{
        return false
    }
}

const validarSequenciaInicialFinal = function(inicial, final) {
    let valorInicial = converterNumeroComVirgula(inicial)
    let valorFinal = converterNumeroComVirgula(final)

    if(valorInicial == false || valorFinal == false){
        return false
    }

    if(valorInicial < valorFinal){
        return true

    }else{
        return false
    }
}

const validarNumeroInteiro = function(numero) {
    let numeroValidado = converterNumeroComVirgula(numero)

    if(numeroValidado == false) {
        return false
    }

    if(Number.isInteger(numeroValidado)) {
        return true
    
    }else{
        return false
    }
}

const validarNumeroPositivo = function(numero) {
    let numeroPositivo = converterNumeroComVirgula(numero)

    if(!numeroPositivo || numeroPositivo <= 0) {
        return false
    
    }else{
        return true
    }
}

const validarIntervaloNumerico = function(valor, numero1, numero2) {
    let valorConvertido = converterNumeroComVirgula(valor)
    let valorMinimo     = converterNumeroComVirgula(numero1)
    let valorMaximo     = converterNumeroComVirgula(numero2)

    // Verifica se qualquer uma das conversões falhou
    if(valorConvertido === false || valorMinimo === false || valorMaximo === false) {
        return false
    }

    if(valorConvertido >= valorMinimo && valorConvertido <= valorMaximo) {
        return true
    
    }else{
        return false
    }
}

const validarIniciarProgramaNovamente = function(resposta) {
    let respostaTratada = resposta.trim().toLowerCase()

    if(respostaTratada      == 's'  || respostaTratada == 'sim'){
        return true
    
    }else if(respostaTratada == 'n' || respostaTratada == 'não'){
        return false

    }else{
        return null
    } 
}

module.exports ={
    validarVazio,
    validarNome,
    validarNumero,
    converterNumeroComVirgula,
    validarSexo,
    validarSequenciaInicialFinal,
    validarNumeroInteiro,
    validarNumeroPositivo,
    validarIntervaloNumerico,
    validarIniciarProgramaNovamente
}