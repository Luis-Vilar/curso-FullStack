function inserirAdiccionais() {
  var massas = document.getElementById("massas");
  var bordas = document.getElementById("bordas");
  var massasValue = massas.options[massas.selectedIndex];
  var bordasValue = bordas.options[bordas.selectedIndex];
  var textMassas = massasValue.text;
  var textBordas = bordasValue.text;

  localStorage.setItem("Massa", JSON.stringify(textMassas));
  localStorage.setItem("Borda", JSON.stringify(textBordas));
}
var elLista = document.getElementById("lista");
var elCampo = document.getElementById("campo");
var elBotao = document.getElementById("botao");
var sabores = JSON.parse(localStorage.getItem("sabores")) || [];

elBotao.onclick = () => {
  var elSabor = elCampo.value;
  sabores.push({ sabor: elSabor });
  salvarSabores();
  

  elCampo.value = "";
};

function salvarSabores() {
  if (sabores.length > 3) {
    alert("permitidos 3 sabores");
  } else {
    localStorage.setItem("Sabres", JSON.stringify(sabores));
    
    elLista.innerHTML = sabores.map((sabor) => `<li>${sabor.sabor}</li>`).join("");

  }
}
