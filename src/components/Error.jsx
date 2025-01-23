import { useRouteError } from "react-router-dom";
const Error=()=>{
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Error Page</h1>
            <p>Oops! Something went wrong.</p>
            <p>Please try again later.</p>
        </div>
    );
};
export default Error;