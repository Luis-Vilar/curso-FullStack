import { TodoList } from "../components/TodoList";
import { Formulario } from "../components/Formulario";
import {UseToDos} from "../contexts/UseToDos";

export const Home = () => {
  return (
    <>
      <div className="row">
        <Formulario />
      </div>
      <div className="row">
        <TodoList name="A fazer" />
        <TodoList name="Finalizados" />
      </div>
    </>
  );
};
