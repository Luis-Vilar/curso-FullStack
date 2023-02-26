export class ListaNegociacoes {
  #listaNegociacoes = [];

  adicciona(negociação) {
    this.#listaNegociacoes.push(negociação);
  }

  filtrarNegociacoes(){
    let tempList = [].concat(this.#listaNegociacoes);


   for (let index = 0; index < tempList.length; index++) {
   if (tempList[index].valor <= 5000) {
      tempList.splice(index, 1);
   }
    
   }
   return tempList;
  }
  
}


