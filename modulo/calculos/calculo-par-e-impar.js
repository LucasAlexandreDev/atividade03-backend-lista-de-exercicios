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

const gerarPares = function(valorInicial, valorFinal){

    let inicio = Number(valorInicial)
    let contadorFinal = Number(valorFinal)

    let listaPares = "\n================================\n"
    listaPares += "        LISTA DE PARES\n"
    listaPares += "================================\n\n"

    let contadorPares = 0
    let contadorInicial = inicio

    while(contadorInicial <= contadorFinal){

        let tipoNumero = gerarParOuImpar(contadorInicial)

        if(tipoNumero == 'par'){
            listaPares += `${contadorInicial}\n`
            contadorPares++
        }

        contadorInicial++
    }

    listaPares += `\nQuantidade de números encontrados: ${contadorPares}\n`

    return listaPares
}

const gerarImpares = function(valorInicial, valorFinal){

    let inicio = Number(valorInicial)
    let contadorFinal = Number(valorFinal)

    let listaImpares = "\n================================\n"
    listaImpares += "       LISTA DE ÍMPARES\n"
    listaImpares += "================================\n\n"

    let contadorImpares = 0
    let contadorInicial = inicio

    while(contadorInicial <= contadorFinal){

        let tipoNumero = gerarParOuImpar(contadorInicial)

        if(tipoNumero == 'impar'){
            listaImpares += `${contadorInicial}\n`
            contadorImpares++
        }

        contadorInicial++
    }

    listaImpares += `\nQuantidade de números encontrados: ${contadorImpares}\n`

    return listaImpares
}

const gerarOpcaoListaDeEscolha = function(inicial, final, opcao){
    
    let opcaoParImparAmbos = Number(opcao)

    if(opcaoParImparAmbos == 1){

        return gerarPares(inicial, final)

    }else if(opcaoParImparAmbos == 2){

        return gerarImpares(inicial, final)

    }else if(opcaoParImparAmbos == 3){

        return gerarPares(inicial, final) + "\n" + gerarImpares(inicial, final)

    }else{
        return false
    }
}

module.exports ={
    gerarOpcaoListaDeEscolha
}