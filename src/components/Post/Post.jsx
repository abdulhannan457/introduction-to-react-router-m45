import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body} = post

    const postStyle={
        border:'2px solid red',
        padding: '10px',
        margin: '15px',
        borderRadius: '15px'
    }
    return (
        <div style={postStyle}>
            <h1>ID:{id}</h1>
            <h2>Title:{title}</h2>
            <p>Body:{body}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>

        </div>
    );
};
Post.propTypes = {
    post:PropTypes.object
}
export default Post;