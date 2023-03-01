/* M1S05 EX3*/

/* Crie uma variável chamada ‘arrayNumeros’, ela é um vetor que possui valores de 1 a 9 (ex.: [1, 2, 3, 4, 5, 6, 7, 8, 9]).
Criar outra variável chamada ‘arrayInvertido’ inicializada como um vetor vazio (ex.: []).
Em seguida, crie e execute uma arrow function que inverta a ordem dos números de ‘arrayNumeros’, armazenando a lista invertida em ‘arrayInvertido’.
Apresente no console os dois vetores. */

var arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrayInvertido=[];


const inverter = (array)=>{
 return arrayInvertido.concat(array).reverse();    
};

console.log(`Array Numeros : ${arrayNumeros}`);
console.log(`Array invertido : ${inverter(arrayNumeros)}`);