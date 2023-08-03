function filtrarCandidatosAFatorial(aVerificar) {
    if (isNaN(aVerificar) || aVerificar < 0) throw new Error(`O parametro recebido "${aVerificar}" não e candidato a fatorial.`)

}


function fatorial(numero) {
    try {
        filtrarCandidatosAFatorial(numero)

        if (numero == 0) {
            return 1;
        }
        else {
            return numero * fatorial(numero - 1);
        }
    } catch (error) {
        return error.message
    }
}

// Teste a função
console.log(fatorial(5)); // Saída esperada: 120
console.log(fatorial("5")) // Saída esperada: 120
console.log(fatorial(0)); // Saída esperada: 1
console.log(fatorial("0")); // Saída esperada: 1
console.log(fatorial(10)); // Saída esperada: 3628800


console.log(fatorial("-1")) // O parametro recebido "-1" não e candidato a fatorial.
console.log(fatorial(-1)) // O parametro recebido "-1" não e candidato a fatorial.
