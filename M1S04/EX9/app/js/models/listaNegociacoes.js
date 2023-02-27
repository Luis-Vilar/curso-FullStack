export class ListaNegociacoes {
  #listaNegociacoes = [];

  adicciona(negociação) {
    this.#listaNegociacoes.push(negociação);
  }

  vendasMaiorQue (valor)  {
    var tempList = [].concat(this.#listaNegociacoes);
    let listaRetorna = [];

    for (let index = 0; index < tempList.length; index++) {
      if (tempList[index].valor > valor) {
        listaRetorna.push(tempList[index]);
      }
    }

    return listaRetorna;
  };

  filtrarNegociacoes = () => this.vendasMaiorQue(5000);
}
