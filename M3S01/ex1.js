function filtrarCandidatosANumeroPrimo(aVerificar) {
  if (isNaN(aVerificar) || aVerificar < 2) throw new Error(`O parametro recebido "${aVerificar}" não e candidato a numero primo.`)

}


function eNumeroPrimo(numero) {
  try {
    filtrarCandidatosANumeroPrimo(numero)

    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) return false;
    }
    return true;

  } catch (error) {
    return error.message
  }

}
// Teste a função
console.log(eNumeroPrimo(7)); // Saída esperada: true
console.log(eNumeroPrimo("7")); // Saída esperada: true
console.log(eNumeroPrimo(12)); // Saída esperada: false
console.log(eNumeroPrimo("12")) // Saída esperada: false

console.log(eNumeroPrimo("askjljdkasjd123jkldaskl1234")) // O parametro recebido "askjljdkasjd123jkldaskl1234" não e candidato a numero primo.
console.log(eNumeroPrimo(-22))  //O parametro recebido "-22" não e candidato a numero primo.
