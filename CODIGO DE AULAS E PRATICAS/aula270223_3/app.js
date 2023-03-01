// pega convidados del localsorage y si no existe crea un array
var convidados = JSON.parse(localStorage.getItem("convidados")) || [];
// captura los elementos del dom
var elLista = document.getElementById("listaConvidados");
var elCampo = document.getElementById("campo");
var elBoton = document.getElementById("btnCadastar");
var elBotonLimpar = document.getElementById("btnLimparLocalsotage");
//ecucha evento click del boton
elBoton.onclick = function () {
  var nome = elCampo.value;
  convidados.push({ nome: nome });
  //   console.log(convidados);
  salvarConvidados();
  elCampo.value = "";
};
//salva lista en localsorage
function salvarConvidados() {
  localStorage.setItem("convidados", JSON.stringify(convidados));
}
// implementar agregar valores a la lista
function listarConvidados() {
  for (const convidado of convidados) {
    var elConvidado = document.createElement("li");
    var elNome = document.createTextNode(convidado.nome);
  }
}

elBotonLimpar.onclick = function () {
  if (confirm("deseja limpar o localsorage???")) {
    localStorage.clear();
  }
};
