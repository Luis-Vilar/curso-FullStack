import { useState } from "react";

export function useForm(formularios) {
  const [passo, setPasso] = useState(0);

  function mudarPasso(valor, evento) {
    evento.preventDefault();
    if (valor < 0 || valor >= formularios.length) {
      return;
    }
    setPasso(valor);
  }
  return {
    passoAtual: passo,
    componenteAtual: formularios[passo],
    mudarPasso,
    ehUltimoPasso: passo + 1 == formularios.length ? true : false,
  };
}
