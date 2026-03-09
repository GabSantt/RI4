/*Nesta atividade, você deve praticar a construção de módulos! Para isso será utilizado o mesmo contexto de atividades anteriores*/
/*Imagine que você foi contratadoa para desenvolver um módulo que possa criar objetos dos tipos empresa, cliente, telefone e endereço.*/
/*Mesmas EXIGÊNCIAS do RI3!!*/

/*Parte 1- Este módulo deverá ser do tipo ES6. Este módulo deverá estar disponível em alguma plataforma de
versionamento na web, como o github, por exemplo.
Para cada atributo privado, deverão existir métodos de acesso get.
Para cada atributo, deverão existir métodos que permitam recuperar o valor do atributo em caixa alta e caixa baixa.
-> realizados em arquivos diferentes, como pedido*/

/*Parte 2- O módulo deve ser testado!

Neste módulo de teste, crie uma empresa e atribua a ela um endereço e pelo menos dois telefones.
Além disso, crie cinco clientes, cada um com seu endereço e dois telefones. Estes clientes devem ser colocados dentro do conjunto de
clientes da empresa.
Um outro módulo deverá ser usado para importar o que foi criado. Com importação do ES6.*/
import { Empresa } from "./empresa.js"
import { Cliente } from "./clientes.js"
import { Endereco } from "./endereco.js"
import { Telefone } from "./telefone.js"

let enderecoEmpresa = new Endereco("SP","SJC","Banhado","80")

let empresa = new Empresa("Polystation","51452364001",enderecoEmpresa)

empresa.telefones.add(new Telefone("12","400289220"))
empresa.telefones.add(new Telefone("12","9564875222"))

let end1 = new Endereco("MG","Paraisópolis","Avenida Roça","283")
let cliente1 = new Cliente("Ana","23648795125",end1)

cliente1.telefones.add(new Telefone("35","965656565"))
cliente1.telefones.add(new Telefone("35","989898989"))

empresa.clientes.add(cliente1)

let end2 = new Endereco("PR","Curitiba","Rua das Flores","5568")
let cliente2 = new Cliente("Joana","54781365294",end2)

cliente2.telefones.add(new Telefone("41","9487545870"))
cliente2.telefones.add(new Telefone("41","9852452457"))

empresa.clientes.add(cliente2)

let end3 = new Endereco("RJ","Rio de Janeiro","Do lado do Pão de Acucar","78")
let cliente3 = new Cliente("Josue","69562132543",end3)

cliente3.telefones.add(new Telefone("21","9542369854"))
cliente3.telefones.add(new Telefone("21","9554565687"))

empresa.clientes.add(cliente3)

let end4 = new Endereco("AM","Manaus","Avenida Rio Amazonas", "10")
let cliente4 = new Cliente("Fernando","54230065987",end4)

cliente4.telefones.add(new Telefone("92","9845120154"))
cliente4.telefones.add(new Telefone("92","902165890"))

empresa.clientes.add(cliente4)

let end5 = new Endereco("GO","Goiânia","Rua dos Pequis","6596")
let cliente5 = new Cliente("Cowboy","56253012017",end5)

cliente5.telefones.add(new Telefone("62","9554874320"))
cliente5.telefones.add(new Telefone("62","9695326541"))

empresa.clientes.add(cliente5)

/*Parte 3- Por fim, seu módulo de teste deve ser capaz de gerar uma descrição da empresa e de seus clientes, desta forma:*/ 
console.log("EMPRESA")
console.log("----------------")
console.log("Nome:",empresa.getNome())
console.log("CNPJ:",empresa.getCnpj())

console.log("ENDEREÇO:",
    empresa.endereco.getRua(),
    empresa.endereco.getNumero(),
    empresa.endereco.getCidade(),
    empresa.endereco.getEstado()
)

for(let telefone of empresa.telefones){
    console.log(`TELEFONES DA EMPRESA: ${telefone.getDdd()} ${telefone.getNumero()}`)
}

console.log("----------------")

console.log("CLIENTES:")

console.log("----------------")
for(let cliente of empresa.clientes){

    console.log("Nome:",cliente.getNome())
    console.log("CPF:",cliente.getCpf())

    console.log("Endereço:",
        cliente.endereco.getRua(),
        cliente.endereco.getNumero()
    )

    console.log("Telefones:")

    for(let telefone of cliente.telefones){
        console.log(`(${telefone.getDdd()}) ${telefone.getNumero()}`)
    }

    console.log("----------------")
}