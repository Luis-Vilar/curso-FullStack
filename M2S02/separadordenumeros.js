function separadorDeNumeros(arrayDeNumeros, opcao) {
  var impares = arrayDeNumeros.filter(
    (numero) => numero % 2 !== 0 && numero !== 0
  );
  var pares = arrayDeNumeros.filter(
    (numero) => numero % 2 === 0 && numero !== 0
  );

  if (opcao === 1) {
    return impares;
  } else if (opcao === 2) {
    return pares;
  } else if (opcao === 3) {
    return {
      pares,
      impares,
    };
  } else {
    return "Opção inválida, deve ser 1 para retornar impar , 2 para retornar par ou 3 para devolver um objeto contendo os dois arrays (pares e impares)" ;
  }
}

module.exports = separadorDeNumeros;
