import { useLoaderData } from "react-router-dom";
import Todo from "../Todo/Todo";
import './Todos.css'

const Todos = () => {
    const todos = useLoaderData()
    return (
        <div>
            <h1>All Todos : {todos.length}</h1>

            <div className="todos">
                {
                    todos.map(todo=> <Todo key={todo.id} todo={todo}></Todo>)
                }
            </div>
        </div>
    );
};

export default Todos;