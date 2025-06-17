import { Link } from "react-router"

const NotFound = () => {
    return (
        <>

        <p>Nothing to see here... (404)</p>

        <Link to='/'>   
            <button>Return Home</button>
        </Link>

        </>
    )
}

export default NotFound;