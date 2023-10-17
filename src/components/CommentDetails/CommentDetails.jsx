import { useLoaderData } from "react-router-dom";


const CommentDetails = () => {
    const comment = useLoaderData()
    const {id,name,email} = comment
    return (
        <div>
            <h1>This is Id:{id}</h1>
            <h2>User Name: {name}</h2>
            <h3>User Email : {email}</h3>
        </div>
    );
};

export default CommentDetails;