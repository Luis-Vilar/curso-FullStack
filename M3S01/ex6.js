class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}

class Estoque {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    removerProduto(produto) {
        const index = this.produtos.findIndex((p) => p.nome === produto.nome);
        if (index !== -1) {
            this.produtos.splice(index, 1);
        }
    }

    listarProdutos() {
        return this.produtos;
    }
}

// Utilização do Estoque
const estoque = new Estoque();

const produto1 = new Produto('Camiseta', 29.99, 50);
estoque.adicionarProduto(produto1);

const produto2 = new Produto('Calça Jeans', 89.99, 30);
estoque.adicionarProduto(produto2);

console.log('Produtos em estoque:', estoque.listarProdutos());

estoque.removerProduto(produto1);

console.log('Produtos em estoque após a remoção:', estoque.listarProdutos());


