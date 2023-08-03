class Vendedor {
    constructor(cnpj, endereco, razaoSocial, nomeFantasia, telefone) {
        this.cnpj = cnpj
        this.emdereco = endereco
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.telefone = telefone
    }
}
class Cliente {
    constructor(nome, cpf, endereco, telefone) {
        this.nome = nome
        this.cpf = cpf
        this.endereco = endereco
        this.telefone = telefone
    }
    alterarTelefone(novoTelefone) {
        this.telefone = novoTelefone
    }
    alterarEndereco(novoEndereco) {
        this.endereco = novoEndereco
    }
}
class Produto {
    constructor(codigoInterno, valorUnitario, descricao) {
        this.codigoInterno = codigoInterno
        this.valorUnitario = valorUnitario
        this.descricao = descricao
    }
    alterarValorUnitario(novoValor) {
        this.valorUnitario = novoValor
    }
}

class Pedido {
    constructor(itens, cliente) {
        this.itens = itens
        this.cliente = cliente
    }
    addiccionaItem(item) {
        this.itens.push(item)
    }
    removerItem(item) {
        let posicao = this.itens.indexOf(item)
        this.itens.splice(posicao, 1)
    }
}

class ItemPedido {
    constructor(quantidade, produto) {
        this.quantidade = quantidade
        this.produto = produto
    }
    alterarQuantidade(novaQuantidade) {
        this.quantidade = novaQuantidade
    }
}
class NotaFiscal {

    constructor(pedido, vendedor) {
        this.itens = pedido.itens
        this.cliente = pedido.cliente
        this.vendedor = vendedor
    }

    emitirNotaFiscal() {
        const vendedor = { ...this.vendedor }
        const cliente = { ...this.cliente }
        const itens = [...this.itens]
        const detalheCompra = []
        itens.forEach((item) => {
            detalheCompra.push({ ...item.produto, quantidade: item.quantidade })
        })

        const totalBruto = itens.reduce((acumulador, item) => {
            return acumulador + item.produto.valorUnitario * item.quantidade;
        }, 0);
        const impostos = totalBruto * 0.10
        const total = totalBruto + impostos

        return {
            vendedor,
            cliente,
            detalheCompra,
            totalBruto,
            impostos,
            total
        }
    }
}


const vendedor = new Vendedor("1234.124241.412-44", "Servidão Doraci Pereira Antunes 119 CEP 88054643 Florianópolis-SC", "Razao Social", "Nome Fantasia")
const cliente = new Cliente("Luis", "123.123.123.12", "Servidão do Geriva 333 Cep 88058355 Florianópolis-SC", "48-91234-1234")
const tecladoRedragonAbnt = new Produto("TECREDFIZZ", 200, "Teclado Redragon Fizz ABNT2")
const mouseRedragonCobra = new Produto("MOUSEREDM711", 134, "Mouse Redragon Cobra M711")
const pendriveGenerico = new Produto("PENGEN16G", 22, "Pendrive 16GB generico")

const pedido = new Pedido([new ItemPedido(1, mouseRedragonCobra), new ItemPedido(1, tecladoRedragonAbnt)], cliente)
const item = new ItemPedido(1, pendriveGenerico)
item.alterarQuantidade(2)
pedido.addiccionaItem(item)
const notaFiscal = new NotaFiscal(pedido, vendedor)
console.log(notaFiscal.emitirNotaFiscal())
pedido.removerItem(item)
console.log(notaFiscal.emitirNotaFiscal())





