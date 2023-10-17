import { useLoaderData } from "react-router-dom";


const TodoDetails = () => {
    const todo = useLoaderData()
    const {id,title,completed} = todo;
    return (
        <div>
            <h2>Id : {id}</h2>
            <h3>Title : {title}</h3>
            <h4>completed : {completed}</h4>
        </div>
    );
};

export default TodoDetails;