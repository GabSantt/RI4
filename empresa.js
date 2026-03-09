export class Empresa {

    #cnpj

    constructor(nome, cnpj, endereco){
        this.nome = nome
        this.#cnpj = cnpj
        this.endereco = endereco
        this.telefones = new Set()
        this.clientes = new Set()
    }

    getNome(){
        return this.nome
    }

    getCnpj(){
        return this.#cnpj
    }

}