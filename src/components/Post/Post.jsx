import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body} = post

    const navigate = useNavigate()

    const postStyle={
        border:'2px solid red',


        padding: '10px',
        margin: '15px',
        borderRadius: '15px'
    }

    const handleShowDetail = ()=>{
          navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h1>ID:{id}</h1>
            <h2>Title:{title}</h2>
            <p>Body:{body}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>
            <button onClick={handleShowDetail}>Click to see details</button>

        </div>
    );
};
Post.propTypes = {
    post:PropTypes.object
}
export default Post;