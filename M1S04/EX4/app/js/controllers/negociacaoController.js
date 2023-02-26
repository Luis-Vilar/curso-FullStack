import { Negociacao } from "../models/negociacao.js";

export class negociacaoController{

#campoData;
#campoQantidade;
#campoValor;


    constructor (){

        this.#campoData = document.getElementById('dataNegociacao');
        this.#campoQantidade = document.getElementById('accoesVendidas');
        this.#campoValor = document.getElementById('valorAccoesVendidas');

    }

    


}