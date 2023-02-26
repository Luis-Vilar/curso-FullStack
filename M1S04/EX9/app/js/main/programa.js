import { NegociacaoController } from "../controllers/negociacaoController.js";

const controller = new NegociacaoController() ;
const form = document.getElementById('form1')

form.addEventListener('submit', () => {
    event.preventDefault();
    controller.criarNegociacao();

});