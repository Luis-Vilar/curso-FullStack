export const initialState = {
  nome: "Eugênio",
  idade: 29,
  profissao: "Day trader",
  bio: "ipsum",
};

export const funcaoReducer = (estado, acao) => {
  let novoEstado = { ...estado };

  if (acao.tipo === "mudar nome") {
    novoEstado = { ...estado, nome: acao.valor };
  }

  if (acao.tipo === "mudar idade") {
    novoEstado = { ...estado, idade: acao.valor };
  }

  if (acao.tipo === "mudar bio") {
    novoEstado = { ...estado, bio: "Bora bio!" };
  }

  if (acao.tipo === "atualizar data") {
    novoEstado = {
      ...estado,
      data_alteracao: new Date().toLocaleDateString("en-US"),
    };
  }

  return novoEstado;
};
