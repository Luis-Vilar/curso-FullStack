var vendas = Number(prompt("Qual foi o valor do pedido ?"));
var clasificacao = '';

if (vendas <= 10000) {// Caso o valor do pedido seja até 10.000,00 a classificação do pedido será bronze.
clasificacao = 'bronze';
} else if(vendas > 10000 && vendas <= 50000) { // Caso seja entre 10.000,00 e 50.000,00 a classificação será prata. 
    clasificacao = 'prata';

} else if(vendas > 100000 && vendas <= 500000) { // Caso seja 100.000,00 a 500.000,00 a classificação será ouro. 
    clasificacao = 'ouro';

} else if (vendas > 500000){ // Acima de 500.000,00 a classificação será platinum. 
    clasificacao = 'platinum';

}else{
    clasificacao = 'indefinida, '; //falta clasificacao para rango de 50000 ate 100000 no texto do exercício e filtragem de valores negativos
}

alert(`A classificação de vendas de sua equipe respeito as vendas no total de R$ ${vendas} e ${clasificacao}, `);