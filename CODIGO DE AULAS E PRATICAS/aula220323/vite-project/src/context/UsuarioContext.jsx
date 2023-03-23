import {createContext} from 'react';

export const UsuarioContext = createContext({
    nome: 'Bruno',
    idade: 24,
    email: 'bruno@email.com'
});