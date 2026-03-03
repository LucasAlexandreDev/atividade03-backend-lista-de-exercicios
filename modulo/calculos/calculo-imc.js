/*************************************************************************** 

* Objetivo: Arquivo responsável pelas funções de calculo IMC
* Dev: Lucas Alexandre da Silva
* Data: 25/02/26
* Versão: 1.0

****************************************************************************/

// função que cálcula o IMC
const calcularImc = function(peso, altura){    
    let valorPeso   = Number(peso)
    let valorAltura = Number(altura)
    
    let resultadoImc = valorPeso / (valorAltura * valorAltura) 
    
    return Number(resultadoImc.toFixed(2))
}


module.exports ={
  calcularImc 
}