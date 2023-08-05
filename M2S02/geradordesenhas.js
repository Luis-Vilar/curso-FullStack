
function geradorDeSenhas(tamanho) {
  const letras = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var senha = "";
  for (var i = 0; i < tamanho; i++) {
    //gera aleatorio de 0 a 1
    let random = Math.floor(Math.random() * 2);
    if (random == 0) {
        //gera aleatorio de 0 a 51 (tamanho do array letras) e concatena com a senha atual
      senha += letras[Math.floor(Math.random() * letras.length)];
    } else {
        //gera aleatorio de 0 a 9 (tamanho do array numeros) e concatena com a senha atual 
      senha += numeros[Math.floor(Math.random() * numeros.length)];
    }
  }
  return senha;
}

module.exports = geradorDeSenhas;
