 /*************************************************************************** 

* Objetivo: Arquivo responsável pelas funções de controle do IMC
* Dev: Lucas Alexandre da Silva
* Data: 27/02/26
* Versão: 1.0

****************************************************************************/

// import da biblioteca de calculo IMC
const calcular = require('../modulo/calculos/calculo-imc')

const TabelaClassificacaoImc = function(peso, altura){
    const resultadoImc = calcular.calculoDoImc(peso, altura)
    
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
    TabelaClassificacaoImc

}