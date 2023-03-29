import { useContext } from 'react';
import { todosContext } from './ToDoProvider';

export const useToDos = () => {
    const context = useContext(todosContext);  
    return context;
  };