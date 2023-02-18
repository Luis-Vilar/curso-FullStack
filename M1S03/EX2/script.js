var entrada = Number(prompt("Insira sua edade"));

if (entrada > 0 && entrada <= 12) {
  alert(`Com ${entrada} anos você e uma criança`);
} else if (entrada >= 13 && entrada <= 17) {
  alert(`Com ${entrada} anos você e um adolescente`);
} else if (entrada >= 18 && entrada <= 65) {
  alert(`Com ${entrada} anos você e um adulto`);
} else if (entrada >= 66) {
    alert(`Com ${entrada} anos você e uma Sênior`);
} else {
  alert(`Você inseriu ${entrada} anos, nao e uma entrada valida`);
}
