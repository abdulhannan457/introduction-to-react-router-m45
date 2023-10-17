import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";
import './Comments.css'

const Comments = () => {
    const comments = useLoaderData()
    return (
        <div>
            <h1>All Comments Here : {comments.length}</h1>

       <div className="Comment">
       {
            comments.map(comment=> <Comment key={comment.id} comment={comment}></Comment>)
        }
       </div>
        </div>
    );
};

export default Comments;