import { SCTitulo, SCBotao, SCImagem } from "./styles";
import {SCInput} from "./styles"; 
function App() {
  return (
    <div>
      <SCInput placeholder="Digite seu nome" />
      <SCInput placeholder="Digite sua Senha" />
    </div>
  );
}

export default App;
    // <div className="App">
    //   <SCTitulo>Olá mundo</SCTitulo>
    //   <SCBotao> enviar..</SCBotao>
    //   <SCImagem
    //     size="500"
    //     src="https://picsum.photos/200/300"
    //     alt="imagem aleatória"
    //   />
    //   <SCImagem
    //     comSombra
    //     src="https://picsum.photos/200/300"
    //     alt="imagem aleatória"
    //   />
    // </div>