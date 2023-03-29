import { useContext } from 'react';
import { todoContext } from './ToDoProvider';

export const useToDos = () => {
    const context = useContext(todoContext);  
    return context;
  };