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

module.exports ={
    calculoDoImc
    
}