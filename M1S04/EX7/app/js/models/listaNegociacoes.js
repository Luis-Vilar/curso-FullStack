
export class ListaNegociacoes {
  #listaNegociacoes = [];

  adicciona(negociação) {
    this.#listaNegociacoes.push(negociação);
  }
}
