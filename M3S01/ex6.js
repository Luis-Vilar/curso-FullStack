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
/**
 * As responsabilidades foram separadas em classes distintas, 
 * onde a classe Estoque gerencia apenas os produtos em estoque 
 * e a nova classe OperacoesEstoque é responsável por realizar
 *  as operações de adicionar e remover produtos.
 * O código agora está mais extensível, pois novas funcionalidades 
 * relacionadas ao estoque podem ser adicionadas sem modificar a classe Estoque,
 * com isso agora cumpre com os princípios da responsabilidade unica e aberto fechado
 * do SOLID.
 */

class OperacoesEstoque {
    adicionarProduto(estoque, produto) {
        estoque.adicionarProduto(produto);
    }
    removerProduto(estoque, produto) {
        estoque.removerProduto(produto);
    }
}

const estoque = new Estoque();
const operacoesEstoque = new OperacoesEstoque();

const produto1 = new Produto('Camiseta', 29.99, 50);
operacoesEstoque.adicionarProduto(estoque, produto1);
const produto2 = new Produto('Calça Jeans', 89.99, 30);
operacoesEstoque.adicionarProduto(estoque, produto2);

console.log('Produtos em estoque:', estoque.listarProdutos());

// injeção de dependência para fornecer a instância da classe Estoque à classe OperacoesEstoque
operacoesEstoque.removerProduto(estoque, produto1);

console.log('Produtos em estoque após a remoção:', estoque.listarProdutos());


