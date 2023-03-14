import { useState } from "react";


function Contador() {
    const [contador, setContador] = useState(1)

    function adiccionar(){
        setContador(contador+1)
    }



    return (
        <div>
            <h1>O contador é: {contador}</h1>
            <button onClick={adiccionar}>Click aqui.</button>
        </div>

    )
}

export default Contador