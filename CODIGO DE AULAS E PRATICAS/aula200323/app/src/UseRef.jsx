import{useState, useRef} from 'react';


function UseRef() {
  const [count, setCount] = useState(0);

  const ref = useRef(count);

  function adicicionarCount(evento) {
    evento.preventDefault();

    // guarda o valor antigo
    ref.current = count;

    setCount(count + 1);
  }

  return (
    <div>
      <h1>O valor atual do ref é {ref.current}</h1>
      <h1>O valor atual do count é {count}</h1>
      <button onClick={adicicionarCount}>adicionar</button>
    </div>
  );
}

export default UseRef;
