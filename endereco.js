export class Endereco {

    constructor(estado, cidade, rua, numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    getEstado(){
        return this.estado
    }

    getCidade(){
        return this.cidade
    }

    getRua(){
        return this.rua
    }

    getNumero(){
        return this.numero
    }
}