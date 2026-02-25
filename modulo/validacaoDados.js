 /*************************************************************************** 

* Objetivo: Arquivo responsável pelas funções de validação e verificação de dados de entrada da aplicação.
* Dev: Lucas Alexandre da Silva
* Data: 25/02/26
* Versão: 1.0

****************************************************************************/

const Usuariovalido = function(nomeUsuario){
    let nomeValidado = String(nomeUsuario)

    if(nomeValidado = ''){
        return false

    }else{
        return true
    }
}