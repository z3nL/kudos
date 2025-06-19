import { Link } from "react-router"
import '../CSS/Header.css'

const Header = () => {
    return (
        <>

        <Link to='/'>
        <header>
            <img id="smiley" src="/src/assets/smiley.png" />
            <h1 id="headerTet">Kudo Board</h1>
        </header>
        </Link>

        </>
    )
}

export default Header