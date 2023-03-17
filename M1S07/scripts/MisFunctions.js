export function calcularTotal(negociacoes) {
//   console.log(`Calculando o total de negociações : ${negociacoes} valor : ${negociacoes.valor} quantidade: ${negociacoes.quantidade}`);
  return negociacoes.reduce((total, n) => total + n.valorNegociacao * n.quantidadeNegociacao,0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
