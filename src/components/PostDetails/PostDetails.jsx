import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData()
    const {id,title,body} = post;

const {people} = useParams()
console.log(people)

    const navigate = useNavigate()
     const handleGoBack = () =>{
       navigate(-1)
     }

    return (
        <div>
            <h3>Id of post:{id}</h3>
            <p>title:{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;