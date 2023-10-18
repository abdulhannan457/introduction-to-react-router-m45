import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Todo = ({todo}) => {
    const {id,title,completed} = todo;
    const todoStyle = {
        border: '2px solid green',
        padding: '15px',
        margin: '15px',
        borderRadius : '30px 0px'
    }

const navigate = useNavigate()
const handleTodoClick = ()=>{
    navigate(`/todo/${id}`)
}

    return (
        <div style={todoStyle}>
            <h2>This is Id : {id}</h2>
            <h3>This is Title : {title}</h3>
            <h4>Its Completed : {completed}</h4>
            <Link to={`/todo/${todo.id}`}>Show PI</Link>
            <button onClick={handleTodoClick}>Go Ahead</button>
        </div>
    );
};
Todo.propTypes = {
    todo:PropTypes.object
}
export default Todo;