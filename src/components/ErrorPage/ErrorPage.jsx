

import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h2>Oopps !!!</h2>
            {error.statusText || error.message}
            {
                error.status === 404 && <div>
                <h3>Server Not Found</h3>
                <p>Go Back Where you From</p>
                <Link to={'/'}><button>Go Home</button></Link>
          

                </div>
            }
           
               



        </div>
    );
};

export default ErrorPage;