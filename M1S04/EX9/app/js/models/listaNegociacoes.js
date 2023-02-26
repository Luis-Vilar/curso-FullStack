export class ListaNegociacoes {
  #listaNegociacoes = [];

  adicciona(negociação) {
    this.#listaNegociacoes.push(negociação);
  }

  filtrarNegociacoes() {
    var tempList = [].concat(this.#listaNegociacoes);
    let listaRetorna = [];

    for (let index = 0; index < tempList.length; index++) {
      if (tempList[index].valor > 5000 ) {
        listaRetorna.push(tempList[index])
        
      }
    
    }

    return listaRetorna;
  }
 

}
