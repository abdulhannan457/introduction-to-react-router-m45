import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Comment = ({comment}) => {
    const {id,name,email} = comment
    const commentStyle = {
        border: '2px solid purple',
        padding: '15px',
        margin: '15px',
        borderRadius : '20px 0px',
        backgroundColor:'',
        color: 'brown',
        fontFamily: 'cursive'
    }
    return (
        <div style={commentStyle}>
            <h2>ID:{id}</h2>
            <h3>Name:{name}</h3>
            <h4>Email:{email}</h4>
            <Link to={`/comment/${comment.id}`}>Comment Details</Link>
            <Link to={`/comment/${comment.id}`}><button>Click Me</button></Link>
            
        </div>
    );
};
Comment.propTypes = {
    comment:PropTypes.object
}
export default Comment;