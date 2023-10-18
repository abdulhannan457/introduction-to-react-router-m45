import { useLoaderData, useNavigate } from "react-router-dom";


const CommentDetails = () => {
    const comment = useLoaderData()
    const {id,name,email} = comment
    
    const navigate = useNavigate()
    const handleBackComment = ()=>{
        navigate(-1)
    }
    return (
        <div>
            <h1>This is Id:{id}</h1>
            <h2>User Name: {name}</h2>
            <h3>User Email : {email}</h3>
            <button onClick={handleBackComment}>Go Back</button>
        </div>
    );
};

export default CommentDetails;