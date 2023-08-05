function getRandomInt(max, min = 1) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function regra1(lista) {
  const indexRandom = getRandomInt(lista.length);
  const aux = lista[0];
  lista[0] = lista[indexRandom];
  lista[indexRandom] = aux;
  return lista;
}
function regra2(lista) {
  const index = lista.indexOf("Danilo");
  const index2 = lista.indexOf( "Pedro");
  const aux = lista[index];
  lista[index] = lista[index2];
  lista[index2] = aux;
  return lista;
}
function regra3(lista, name) {
  const existe = lista.find((element) => element === name);
  const resposta = existe
    ? { message: `Sim, existe ${name} na lista`, code: 200 }
    : { message: `Não, existe ${name} na lista`, code: 404 };
  return resposta;
}
module.exports = {
  async resolver(req, res) {
    let listaR1 = [...req.body.lista];
    let listaR2 = [...req.body.lista];
    let listaR3 = [...req.body.lista];
    const resposta = [];
    resposta.push({ lista: [...req.body.lista] });
    resposta.push({ regra_1: regra1(listaR1) });
    resposta.push({ regra_2: regra2(listaR2) });
    resposta.push({ regra_3: regra3(listaR3, "João") });
    resposta.push({ regra_3: regra3(listaR3, "Pedro") });

    res.status(200).json(resposta);
  },
};
