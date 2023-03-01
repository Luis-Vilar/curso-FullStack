
/* M1S05 EX4*/

/* Utilizando o mesmo vetor ‘arrayNumeros’, que possui valores de 1 a 9. Crie agora uma variável chamada ‘arrayImpares’.
Utilizando a funcionalidade de arrays ‘filter’ em ‘arrayNumeros’, crie uma arrow function que teste se um valor passado por parâmetro é ímpar (retornando 1 ou true se for ímpar, 0 ou false se for par) e passe esta função como parâmetro de ‘filter’. Por fim, confira se o vetor ‘arrayImpares’ possui todos os números ímpares presentes em ‘arrayNumeros’. */

var arrayImpares = arrayNumeros.filter( numero =>{
    return numero % 2 == 1;
});

console.log(`Array Impares : ${arrayImpares}`);