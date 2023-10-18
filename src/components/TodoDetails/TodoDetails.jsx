import { useLoaderData, useNavigate } from "react-router-dom";


const TodoDetails = () => {
    const todo = useLoaderData()
    const {id,title,completed} = todo;

     const navigate = useNavigate()
    const handlePreviousPage =()=>{
           navigate(-1)
    }
    return (
        <div>
            <h2>Id : {id}</h2>
            <h3>Title : {title}</h3>
            <h4>completed : {completed}</h4>
            <button onClick={handlePreviousPage}>Previous page</button>
        </div>
    );
};

export default TodoDetails;