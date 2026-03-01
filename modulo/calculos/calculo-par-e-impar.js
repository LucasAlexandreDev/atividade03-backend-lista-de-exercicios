/*************************************************************************** 

* Objetivo: Arquivo responsável pelas funções de calculo sobre Par/Impar 
* Dev: Lucas Alexandre da Silva
* Data: 28/02/26
* Versão: 1.0

****************************************************************************/

const gerarParOuImpar = function(numero){
    let resultado = Number(numero)

    if(resultado % 2 == 0){
        resultado = 'par'    

    }else if(resultado % 2 == 1){
        resultado = 'impar'

    }else{
        return false
    }

    return resultado
}

const gerarRelatorioParImpar = function(valorInicial, valorFinal){
    let inicio  = Number(valorInicial)
    let fim     = Number(valorFinal)

    // Acumuladores para Pares
    let listaPares = "Lista de números Pares\n"
    let contadorPares = 0

    // Acumuladores para Ímpares
    let listaImpares = "\nLista de números Ímpares\n"
    let contadorImpares = 0

    let numeroAtual = inicio

    while (numeroAtual <= fim) {
        // 1. Usando sua função que retorna 'par' ou 'impar'
        let tipoNumero = gerarParOuImpar(numeroAtual)

        if (tipoNumero == 'par') {
            listaPares += `${numeroAtual}\n`
            
            contadorPares++

        } else if (tipoNumero == 'impar') {
            listaImpares += `${numeroAtual}\n`
            
            contadorImpares++
        }

        numeroAtual++
    }

    // Adicionando os rodapés com nomes claros
    listaPares   += `Qtde de números encontrados: ${contadorPares}\n`
    listaImpares += `Qtde de números encontrados: ${contadorImpares}\n`

    return listaPares + listaImpares
}

module.exports ={
    gerarParOuImpar,
    gerarRelatorioParImpar
}