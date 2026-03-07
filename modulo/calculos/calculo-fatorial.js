/*************************************************************************** 

* Objetivo: Arquivo responsável pelas funções de calculo de Fatoração
* Dev: Lucas Alexandre da Silva
* Data: 28/02/26
* Versão: 1.0

****************************************************************************/

const gerarFatorial = function(numero){
    let contador = Number(numero)

    // a variável do resultado fatorial começa com 1, pois será multiplicada pelos números da sequência
    let resultado = 1
    let sequenciaMultiplicativa = ''
    let exibirResultado

    // enquanto o contador for maior que 1
    while(contador > 1){

        // multiplica o resultado pelo valor atual do contador
        resultado *= contador

        // adiciona o número atual na sequência seguido de 'x'
        sequenciaMultiplicativa += contador + ' x '

        // decrementa o contador para continuar a sequência
        contador--
    }

    // quando o while termina, o contador vale 1, então fazemos a multiplicação
    resultado *= contador

    // adiciona o último número da sequência
    sequenciaMultiplicativa += contador

    // variável recebe a estilização da exibição do resultado
    exibirResultado = `
==================================================
            RELATÓRIO DE CÁLCULO FATORIAL
==================================================

Número informado.....: ${numero}

==================================================
            SEQUÊNCIA MULTIPLICATIVA
==================================================

${numero}! = ${sequenciaMultiplicativa}

==================================================
                    RESULTADO
==================================================

Resultado do fatorial: ${resultado.toLocaleString('pt-BR')}

==================================================
`
    return exibirResultado
}

/*
toLocaleString() -> É um método onde converte um valor numérico em uma string, 
aplicando formatação baseada em uma localidade (locale)


Neste caso, o 'pt-BR' formata o número no padrão brasileiro,
utilizando ponto (.) como separador de milhar
    Ex: 123456789 -> 123.456.789
*/



module.exports ={
    gerarFatorial
}