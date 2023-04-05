// importando icones 
import { GrFormNextLink, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
//importando estilos styled-components
import { SCBtn, SCContainerFormulario, SCHeader } from "./styles";
//importando componentes endereco , agradecimento, dados pessoais e passos
import Endereco from "./components/EnderecoForm";
import Agradecimento from "./components/Agradecimento";
import DadosPessoais from "./components/DadosPessoais";
import Passos from "./components/Passos";
//importando custom hook useForm
import { useForm } from "./hooks/useForm";

function App() {
  //array de componentes que serão renderizados
  const componentesFormulario = [
    <DadosPessoais />,
    <Endereco />,
    <Agradecimento />,
  ];
  //destruturacao de objeto retornado pelo custom hook
  const { passoAtual, componenteAtual, mudarPasso, ehUltimoPasso } = useForm(
    componentesFormulario
  );

  return (
    // renderizando componentes
    <div className="app">
      {/* //renderizando header */}
      <SCHeader>
        <h2>Cadastre-se gratuitamente!</h2>
        <p>
          Faça o seu cadastro para ter acesso a todos os recursos da nossa
          plataforma
        </p>
      </SCHeader>
      {/* //renderizando formulario */}
      <SCContainerFormulario>
        <form onSubmit={(e) => mudarPasso(passoAtual + 1, e)}>
          {/* //renderizando passos */}
          <Passos passoAtual={passoAtual} />
          {/* //renderizando componentes */}
          <div className="inputs-container">{componenteAtual}</div>
          {/* //renderizando botoes */}
          <div className="acoes">
            {!passoAtual == 0 && (
              <SCBtn
                type="button"
                onClick={(e) => mudarPasso(passoAtual - 1, e)}
              >
                <GrFormPrevious />
                <span>Voltar</span>
              </SCBtn>
            )}
            {ehUltimoPasso ? (
              <SCBtn
                type="submit"
                onClick={(e) => mudarPasso(passoAtual - 2, e)}
              >
                <span>Enviar</span>
                <FiSend />
              </SCBtn>
            ) : (
              <SCBtn type="submit">
                <span>Avançar</span>
                <GrFormNextLink />
              </SCBtn>
            )}
          </div>
        </form>
      </SCContainerFormulario>
    </div>
  );
}

export default App;
