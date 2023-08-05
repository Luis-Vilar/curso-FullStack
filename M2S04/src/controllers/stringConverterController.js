module.exports = {
  async stringConverter(requisição, resposta) {
    const { item } = requisição.body;
    if (item) {
      let conteudo = item;
      let conteudoConvertido = "";
      for (let i = 0; i < conteudo.length; i++) {
        if (conteudo[i] == conteudo[i].toUpperCase()) {
          conteudoConvertido += conteudo[i].toLowerCase();
        } else {
          conteudoConvertido += conteudo[i].toUpperCase();
        }
      }
      return resposta.status(200).json({ item: conteudoConvertido });
    }
  },
};
