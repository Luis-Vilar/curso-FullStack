import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";
import { NegociacoesView } from "../views/NegociacoesView.js";

export class NegociacaoController {
  #campoData;
  #campoQantidade;
  #campoValor;
  #lista = new ListaNegociacoes();
  #negociacionesView = new NegociacoesView();

  constructor() {
    this.#campoData = document.getElementById("dataNegociacao");
    this.#campoQantidade = document.getElementById("accoesVendidas");
    this.#campoValor = document.getElementById("valorAccoesVendidas");
  }

  criarNegociacao() {
    let data = this.#campoData.value;
    let quantidade = this.#campoQantidade.value;
    let valor = this.#campoValor.value;

    let negociacao = new Negociacao(data, quantidade, valor);
    // console.log(negociacao);
    // console.log(this.#lista);

    this.#lista.adicciona(negociacao);

    this.#negociacionesView.atualizarTabela(data, quantidade, valor);
    // lista filtrada so vendas acima 5000
    console.log(this.#lista.filtrarNegociacoes());
  }
}
