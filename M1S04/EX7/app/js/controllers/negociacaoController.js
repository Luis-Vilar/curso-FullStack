import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/listaNegociacoes.js";

export class negociacaoController{

#campoData;
#campoQantidade;
#campoValor;
#lista = new ListaNegociacoes;


    constructor (){

        this.#campoData = document.getElementById('dataNegociacao');
        this.#campoQantidade = document.getElementById('accoesVendidas');
        this.#campoValor = document.getElementById('valorAccoesVendidas');

    }

    criarNegociacao (){

        let data = this.#campoData.value ;
        let quantidade = this.#campoQantidade.value ;
        let valor = this.#campoValor.value ;

        let negociacao = new Negociacao( data, quantidade, valor);
        console.log(negociacao);
        this.#lista.adicciona(negociacao);
    }



    


}