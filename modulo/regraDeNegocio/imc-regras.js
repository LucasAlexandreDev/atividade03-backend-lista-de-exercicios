 /*************************************************************************** 

* Objetivo: Arquivo responsável regras de classificação do Imc
* Dev: Lucas Alexandre da Silva
* Data: 01/03/26
* Versão: 1.0

****************************************************************************/

// função que com o resultado do IMC, classifica o peso do paciente
const classificarImc = function(resultadoImc){
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

// função que com o resultado da classificação peso, gera o diagnóstico do paciente
const definirDiagnosticoPaciente = function(classificacao){
    let resultadoDiagnostico

    if(classificacao == 'Abaixo do peso' ){
        resultadoDiagnostico = 'Peso abaixo do recomendado para a altura informada.\nPode indicar insuficiência nutricional ou necessidade de avaliação clínica.\n\nRecomenda-se acompanhamento nutricional para adequação alimentar.'
    
    }else if(classificacao == 'Peso normal'){
        resultadoDiagnostico = 'Resultado dentro da faixa considerada saudável.\nIndica equilíbrio entre peso e altura.\n\nRecomenda-se manter hábitos alimentares saudáveis e prática regular de exercícios.'
    
    }else if(classificacao == 'Acima do peso (sobrepeso)'){
        resultadoDiagnostico = 'Peso acima do ideal para a altura informada.\nPode representar risco aumentado para doenças cardiovasculares.\n\nRecomenda-se atenção à alimentação e prática de atividades físicas.'
    
    }else if(classificacao == 'Obesidade I'){
        resultadoDiagnostico = 'Quadro de obesidade grau I.\nRisco aumentado para problemas como hipertensão e diabetes.\nÉ recomendado acompanhamento médico e nutricional.'
    
    }else if(classificacao == 'Obesidade II'){
        resultadoDiagnostico = 'Quadro de obesidade grau II.\nRisco elevado para doenças cardiovasculares e metabólicas.\nNecessário acompanhamento profissional especializado.'
    
    }else if(classificacao == 'Obesidade III'){
        resultadoDiagnostico = 'Obesidade grau III (obesidade mórbida).\nAlto risco à saúde, podendo comprometer órgãos vitais.\nRecomenda-se acompanhamento médico imediato e plano de intervenção.'
    }

    return resultadoDiagnostico
}

module.exports ={
    classificarImc,
    definirDiagnosticoPaciente
}