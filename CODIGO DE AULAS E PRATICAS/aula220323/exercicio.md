# Exercício criação de contexto
## Passos:
1 - Crie o arquivo do contexto
    - crie uma pasta chamada 'context' dentro da pasta 'src'
    - crie um arquivo chamado 'UsuarioContext.jsx' dentro dessa pasta
    - o arquivo precisa começar com letra maiúscula

2 - Crie o contexto
    - importe createContext do React
        Codigo: import {createContext} from 'react';

    - crie um variável chamada de 'UsuarioContext' que seja atuibuída a 'createContext()'
        Codigo: const UsuarioContext = createContext()

    - dentro dos parênteses do 'createContext' passe o valor inicial.
    - o valor inicial é o seguinte objeto:
        

        Codigo: const UsuarioContext = createContext({
                    nome: 'Bruno',
                    idade: 24,
                    email: 'bruno@email.com'
                    })
    
    - adicione a palavra 'export' para exportar o contexto.
        Codigo: export const UsuarioContext = createContext({
                    nome: 'Bruno',
                    idade: 24,
                    email: 'bruno@email.com'
                    })

3 - Criando o provider
    - dentro do arquivo App.jsx importe o contexto para ser utilizado.
        Codigo: import {UsuarioContext} from './context/UsuarioContext'

    - import também do react o hook 'useContext'
        Codigo: import {useContext} from 'react'
    
    - receba, dentro da função APP, em uma variável chamada de 'usuario' o valor do contexto. Para isso use o hook 'useContext()'. O contexto (UsuarioContext) que foi importado deve ser passado dentro dos parênteses do 'useContext()':
        Codigo: const usuario = useContext(UsuarioContext)

    - dentro do return, envolva todo o código com o componente do provider e passe dentro do atributo value a variável 'usuario' que recebeu o valor do context.
        Codigo: return (
                    <UsuarioContext.Provider value={usuario}>
                    <Item />
                    </UsuarioContext.Provider>
                )

4 - use o contexto:
    - crie um componente chamado 'Item';
    - dentro do arquivo importe o contexto para ser utilizado.
        Codigo: import {UsuarioContext} from './context/UsuarioContext'

    - import também do react o hook 'useContext'
        Codigo: import {useContext} from 'react'

    - receba em uma variável chamada de 'usuario' o valor do contexto. Para isso use o hook 'useContext()'. O contexto (UsuarioContext) que foi importado deve ser passado dentro dos parênteses do 'useContext()':
        Codigo: const usuario = useContext(UsuarioContext)

    - crie um elemento HTML para passar o nome, idade e email:
        Codigo: return (
                    <h1>{usuario.nome}</h1>
                    <h2>{usuario.idade}</h2>
                    <h3>{usuario.email}</h3>
                )


