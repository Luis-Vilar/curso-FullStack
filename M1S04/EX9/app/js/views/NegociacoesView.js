export class NegociacoesView {



  atualizarTabela(data, quantidade, valor) {
    var tabelaNegociacoes = document.getElementById("tabela");

    if (tabelaNegociacoes) {
      //crea una nueva row de 3 cels
      var row = tabelaNegociacoes.insertRow(0);
      var cel1 = row.insertCell(0);
      var cel2 = row.insertCell(1);
      var cel3 = row.insertCell(2);
      

      //llena las cells con los datos 
      cel1.innerHTML = data;
      cel2.innerHTML = quantidade;
      cel3.innerHTML = valor;
      
    }
  }
}