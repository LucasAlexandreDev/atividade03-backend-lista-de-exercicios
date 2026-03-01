/*************************************************************************** 

* Objetivo: Arquivo responsável pelas funções de calculo de Fatoração
* Dev: Lucas Alexandre da Silva
* Data: 28/02/26
* Versão: 1.0

****************************************************************************/

const gerarLinhaFatorial = function(numero) {
    let numeroFatorial = Number(numero)

    if (numeroFatorial > 1) {
        return `${numeroFatorial} x `
    } 
    
    return numeroFatorial
}

const gerarFatorial = function(numero){
    let contadorInicial = Number(numero)
    let resultado = 1
    let textoAcumulado = ''

    while (contadorInicial >= 1) {     
        resultado = resultado * contador
        
        textoAcumulado += gerarLinhaFatorial(contadorInicial)

        contador--
    }

    return `${textoAcumulado} = ${resultado}`
}

module.exports ={
    gerarLinhaFatorial,
    gerarFatorial
}