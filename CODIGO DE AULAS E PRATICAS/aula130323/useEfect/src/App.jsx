import Cabecalho from "./Cabecalho";
import Instrucoes from "./Instrucoes";
import Ingredientes from "./Ingredientes";
import Rodape from "./Rodape";
import receitas from "./receitas.json";
import Imagem from "./Imagem";
import { useState, useEffect } from 'react'

const App = () => {
  const [pagina, setPagina] = useState(0)
  const [receita, setReceita] = useState(receitas[pagina])

  //const receita = receitas[1];
  function proximaPagina() {
    if (receitas.length == pagina + 1) { return } else {
      setPagina(pagina + 1)
    }
  }
  function anteriorPagina() {
    if (pagina == 0) { return } else {
      setPagina(pagina - 1)
    }
  }
  useEffect(() => {
    setReceita(receitas[pagina])
  }, [pagina])


  return (
    <div>

      <Cabecalho titulo={receita.titulo} descricao={receita.descricao} />
      <Imagem
        caminho="https://www.casalcozinha.com.br/wp-content/uploads/2020/11/receita-simples-e-caseira-de-torta-de-maca-1300x932.png"
        textoAlternativo="qualquer coisa"
      />
      <button onClick={anteriorPagina}>Anterior</button>
      <button onClick={proximaPagina}>Proxima</button>
      <Ingredientes ingrediente={receita.ingredientes} />
      <Instrucoes lista={receita.preparo} />
      <Rodape
        tempoDePreparo={receita.tempo_preparo}
        rendimento={receita.rendimento}
      />

    </div>
  );
};

export default App;
