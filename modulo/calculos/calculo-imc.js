 /*************************************************************************** 

* Objetivo: Arquivo responsável pelas funções de calculo IMC
* Dev: Lucas Alexandre da Silva
* Data: 25/02/26
* Versão: 1.0

****************************************************************************/

const validacao = require('../validacaoDados.js')

const calculoDoImc = function(peso, altura){
    if( !validacao.validarVazio(peso)          || !validacao.validarVazio(altura)  || 
        !validacao.validarNumero(peso)         || !validacao.validarNumero(altura) ||
        !validacao.validarNumeroPositivo(peso) || !validacao.validarNumeroPositivo(altura)){

        return false    
    }        
    
    let valorPeso   = Number(peso)
    let valorAltura = Number(altura)
    let resultadoImc

    resultadoImc = valorPeso / (valorAltura * valorAltura) 
    
    return resultadoImc
}

const calculoTabelaClassificacao = function(peso, altura){
    const resultadoImc = calculoDoImc(peso, altura)
    
    if(!resultadoImc){
        return false
    }

    let classificacaoPeso

    if(resultadoImc < 18.5){
        classificacaoPeso = 'Abaixo do peso'

    }else if(resultadoImc <= 24.9){
        classificacaoPeso = 'Peso normal'

    }else if(resultadoImc <= 29.9){
        classificacaoPeso = 'Acima do peso (sobrepeso)'
    
    }else if(resultadoImc <= 34.9){
        classificacaoPeso = 'Obesidade I'
    
    }else if(resultadoImc <= 39.9){
        classificacaoPeso = 'Obesidade II'

    }else if(resultadoImc >= 40){
        classificacaoPeso = 'Obesidade III'

    }else{
        return false
    }

    return classificacaoPeso
}

module.exports ={
    calculoDoImc,
    calculoTabelaClassificacao
}