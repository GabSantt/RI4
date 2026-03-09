export class Cliente{

    #cpf

    constructor(nome, cpf, endereco){
        this.nome = nome
        this.#cpf = cpf
        this.endereco = endereco
        this.telefones = new Set()
    }

    getNome(){
        return this.nome
    }

    getCpf(){
        return this.#cpf
    }

}